const express = require("express");
const path = require("path");
const home = require("./pages/home"); // adjust the path if needed
const { default: about } = require("../pages/about");

const app = express();

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.send(home);
});

app.get("/about", (req, res) => {
    res.send(about);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});