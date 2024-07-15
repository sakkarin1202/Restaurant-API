const config = require("../config/auth.consfig");
const db = require ("../models");
const User = db.User;
const Role = db.Role;
const jwt = require ("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {Op} = require("sequelize")

//Register a new user
exports.signup = async(req,res)=>{
    const {username,password,email} = req.body;
    if(!username|| !password || !email){
        res.status(400).send({
            message:"please provide all required fields"
        })
        return
    }
    //Prepare user data
    const newUser = {
      username: username,
      password:bcrypt.hashSync(password,16),
      email:email
    };
    //save user in the database
    await User.create(newUser).then((user) => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles,
            },
          },
        }).then((roles) => {
          user.setRoles(roles).then(() => {
            // Corrected setaRoles to setRoles
            res.send({
              message: "User registered successfully!",
            });
          });
        });
      } else {
        user.setRoles([1]).then(() => {
          res.send({
            message: "User registered successfully!",
          });
        });
      }
    }).catch((error)=>{
        res.status(500).send({
            message: error.message ||
          "somthing error occured while registering a new user.",
        })
    })
}


exports.signin = async (req, res) => {
    const { username, password,email } = req.body;
    if (!username || !password||email) {
        res.status(400).send({
            message: "Please provide username and password",
        });
        return;
    }
    const user = await User.findOne({ where: { username: username } });
        if (!user) {
            return res.status(404).send({ message: "User not found" });
}
}