const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');7

// get all restaurants
router.get("/", async (req, res) => {
    const restaurants = await Restaurant.findAll();
    res.json(restaurants);
});

// get a restaurant by id
router.get("/:id", async (req, res) => {
    const restaurant = await Restaurant.findByPk(req.params.id);
    res.json(restaurant);
});

// create a new restaurant
router.post("/", async (req, res) => {
    const newRestaurant = await Restaurant.create(req.body);
    res.status(201).json(newRestaurant);
});

// update an existing restaurant
router.put("/id:", async (req, res) => {
    const updatedRestaurant = await Restaurant.update(req.body, {
        where: { id: req.params.id }
    });
    // const updatedRestaurant = await Restaurant.FindByPk(req.params.id);
    res.json(updatedRestaurant);
});

// delete a restaurant
router.delete("/:id", async (req, res) => {
    await Restaurant.destroy({
        where: { id: req.params.id}
    });
    res.status(204).send();
});

module.exports = router;