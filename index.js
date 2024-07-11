const express = require("express");
const app = express();
require("dotenv").config();
const RestaurantRouter = require("./routers/restaurant.router");
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/restaurant", RestaurantRouter);

app.get("/", (req, res) => {
  res.send("<h1>Hello Restaurant API</h1>");
});
app.listen(PORT, () => {
  console.log("Listenig to http://localhost:" + PORT);
});
