const express = require("express");
const router = express.Router();

// Get all articles
router.get("/", async (req, res) => {
  try {
    const articles = await req.articlesCollection.find().toArray();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new article
router.post("/", async (req, res) => {
  const article = {
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
    upvotes: 0,
    time: new Date(),
  };

  try {
    const result = await req.articlesCollection.insertOne(article);
    res.status(201).json(result.ops[0]); // Ensure the inserted document is returned
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
