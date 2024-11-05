const express = require("express");
const app = express();
const Restaurant = require("../models/index");
const db = require("../db/connection");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create your GET Request Route Below
app.get("/restaurants", async (req, res) => {
    try {
      const restaurants = await Restaurant.findAll();
      res.json(restaurants);
    } catch (error) {
      res.status(500).json({ error: "An error occurred while fetching restaurants" });
    }
  });

  app.get("/restaurants/:id", async (req, res) => {
    try {
      const restaurant = await Restaurant.findByPk(req.params.id);
      res.json(restaurant);
    } catch (error) {
      res.status(500).json({ error: "An error occurred while fetching restaurants" });
    }
  });

// Create a new restaurant

app.post("/restaurants", async (req, res) => {
    try {
        const newRestaurant = await Restaurant.create(req.body);
        res.status(201).json(newRestaurant);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while creating the restaurant"});
    }
})

// Update an existing restaurant

app.put("/restaurants/:id", async (req, res) => {
    try {
        const updated = await Restaurant.update(req.body, {
            where: { id: req.params.id }
        })
        if (updated) {
            const updatedRestaurant = await Restaurant.findByPk(id);
            res.json(updatedRestaurant);
        }
        else {
            res.status(404).json({ error: "Restaurant not found"})
        }
    } catch (error) {
        res.status(500).json({ error: "An error occurred while updating the restaurant"});
    }
})

// Delete a restaurant

app.delete("/restaurants/:id", async (req, res) => {
        const deleted = await Restaurant.destroy({
            where: { id: req.params.id}
        });
        res.status(204).send();
})

module.exports = app;
