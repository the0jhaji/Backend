import express from "express";
import path from "path";

const app = express();

// Serve static files
const publicPath = path.resolve("public");
app.use(express.static(publicPath));

// Home
app.get("/", (req, res) => {
    res.sendFile(path.resolve("html/home.html"));
});

// Login
app.get("/login", (req, res) => {
    res.sendFile(path.resolve("html/login.html"));
});

// 404
app.use((req, res) => {
    res.status(404).sendFile(path.resolve("html/404.html"));
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});