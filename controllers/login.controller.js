const bcrypt = require('bcrypt');
const User = require('../models/user.model');

const loginUser = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    try {
        // Check if the user exists in the database
        const user = await User.findOne({ username });

        if (!user) {
        return res.status(404).json({ message: "User not found" });
        }

        // Compare the hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" });
        }

        // Authentication successful
        res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
 }

module.exports = {
    loginUser
};
