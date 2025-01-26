const express = require("express");

const app = express();

app.use();

app.post("/", (req, res) => {
    console.log(req.body);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
