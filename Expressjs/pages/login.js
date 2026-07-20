export default function login(){
    return `
        <h1>Login Page</h1>
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
    `;
}