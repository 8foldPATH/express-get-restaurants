const express = require("express");
const app = express();
const db = require("../db/connection");

const restaurantRouter = require("../routes/restaurants");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/restaurants", restaurantRouter)

/*
// Create your GET Request Route Below
app.get("/restaurants", async (req, res) => {
  const restaurants = await Restaurant.findAll();
  res.json(restaurants);
});

  app.get("/restaurants/:id", async (req, res) => {
    const restaurant = await Restaurant.findByPk(req.params.id);
    res.json(restaurant);
});

// Create a new restaurant

app.post("/restaurants", async (req, res) => {
  const newRestaurant = await Restaurant.create(req.body);
  res.status(201).json(newRestaurant);
});

// Update an existing restaurant

app.put("/restaurants/:id", async (req, res) => {
  const updated = await Restaurant.update(req.body, {
      where: { id: req.params.id }
  });
  if (updated) {
      const updatedRestaurant = await Restaurant.findByPk(id);
      res.json(updatedRestaurant);
  }
  else {
      res.status(404).json({ error: "Restaurant not found"})
  };
});

// Delete a restaurant

app.delete("/restaurants/:id", async (req, res) => {
  await Restaurant.destroy({
      where: { id: req.params.id}
  });
  res.status(204).send();
});
*/

module.exports = app;
