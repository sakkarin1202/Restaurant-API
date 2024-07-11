const Restaurant = require("../models/restaurant.model");

exports.create = async (req, res) => {
  const { name, type, imageUrl } = req.body;
  if (!name || !type || !imageUrl) {
    return res.status(400).send({
      message: "Name, Type, or ImageUrl cannot be empty",
    });
  }

  try {
    const restaurant = await Restaurant.findOne({ where: { name: name } });

    if (restaurant) {
      return res.status(400).send({
        message: "Restaurant already exists!",
      });
    }

    const newRestaurant = {
      name: name,
      type: type,
      imageUrl: imageUrl,
    };
    Restaurant.create(newRestaurant)
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.status(500).send({
          message:
            error.message ||
            "Something error occurred while creating the restaurant.",
        });
      });
  } catch (error) {
    res.status(500).send({
      message:
        error.message ||
        "Something error occurred while creating the restaurant.",
    });
  }
};
