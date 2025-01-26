const express = require("express");
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
const cors = require("cors");
const articlesRouter = require("./routes/articles");
require("dotenv").config(); // Load environment variables

const app = express();
app.use(cors());
app.use(bodyParser.json());

const connectionString = process.env.connectionstring;

MongoClient.connect(connectionString, {
  serverSelectionTimeoutMS: 30000, // Increase server selection timeout
  socketTimeoutMS: 45000, // Increase socket timeout
})
  .then((client) => {
    console.log("Connected to Database");
    const db = client.db("myDatabase"); // Replace 'myDatabase' with your database name
    const articlesCollection = db.collection("articles");

    // Pass the articlesCollection to the articlesRouter
    app.use(
      "/articles",
      (req, res, next) => {
        req.articlesCollection = articlesCollection;
        next();
      },
      articlesRouter
    );

    app.listen(3001, () => console.log("Server Started on port 3001"));
  })
  .catch((error) => console.error(error));
