import express from "express";
import path from "path";

const app = express();

// CSS, JS, Images serve karne ke liye
app.use(express.static("public"));

app.get("/", (req, res) => {
    const abspath = path.resolve("html/home.html");
    res.sendFile(abspath);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});