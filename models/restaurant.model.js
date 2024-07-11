const { DataTypes } = require("sequelize"); // ใช้ DataTypes, ไม่มี DataType
const sequelize = require("./db");

const Restaurant = sequelize.define("Restaurant", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Restaurant.sync({ force: true })
  .then(() => {
    console.log("Table created or already exists");
  })
  .catch((error) => {
    console.error("Unable to create table:", error);
  });

module.exports = Restaurant;
