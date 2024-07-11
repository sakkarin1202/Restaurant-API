const express = require("express");
const router = express.Router();
const restaurantController = require("../controllers/restaurant.controller");

router.post("/", restaurantController.create);
module.exports = router;
