const express = require("express");
const app = express();
const Restaurant = require("../models/index");
const db = require("../db/connection");

// Create your GET Request Route Below
app.get("/restaurants", async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll();
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching restaurants" });
  }
});

module.exports = app;
