import express from "express";
const app = express();
app.get("/",(req, res)=>{
    res.send("<h1>home page </h1>");
});
app.get("/about",(req, res)=>{
    res.send("<h1>about page </h1>");
});
app.get("/login",(req, res)=>{
    res.send(`
        <form action="/submit" method="POST">

        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name" placeholder="Enter your name" required>
        <br><br>

        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" placeholder="Enter your email" required>
        <br><br>

        <label for="password">Password:</label><br>
        <input type="password" id="password" name="password" placeholder="Enter password" required>
        <br><br>

        <label>Gender:</label><br>
        <input type="radio" id="male" name="gender" value="Male">
        <label for="male">Male</label>

        <input type="radio" id="female" name="gender" value="Female">
        <label for="female">Female</label>

        <input type="radio" id="other" name="gender" value="Other">
        <label for="other">Other</label>
        <br><br>

        <label for="course">Course:</label><br>
        <select id="course" name="course">
            <option value="">Select Course</option>
            <option value="B.Tech">B.Tech</option>
            <option value="BCA">BCA</option>
            <option value="B.Sc">B.Sc</option>
            <option value="MCA">MCA</option>
        </select>
        <br><br>

        <label>Hobbies:</label><br>
        <input type="checkbox" id="coding" name="hobbies" value="Coding">
        <label for="coding">Coding</label>

        <input type="checkbox" id="cricket" name="hobbies" value="Cricket">
        <label for="cricket">Cricket</label>

        <input type="checkbox" id="music" name="hobbies" value="Music">
        <label for="music">Music</label>
        <br><br>

        <label for="dob">Date of Birth:</label><br>
        <input type="date" id="dob" name="dob">
        <br><br>

        <label for="message">Message:</label><br>
        <textarea id="message" name="message" rows="5" cols="30" placeholder="Write something..."></textarea>
        <br><br>

        <input type="submit" value="Register">
        <input type="reset" value="Reset">

    </form>
        `);
});
app.post("/submit",(req, res)=>{
    res.send("<h1>Data submited </h1>");
});

const PORT = process.env.PORT || 3500;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log(`Port ${PORT} is busy. Trying ${PORT + 1}...`);
        app.listen(PORT + 1, () => {
            console.log(`Server running on http://localhost:${PORT + 1}`);
        });
    } else {
        console.error(err);
    }
});