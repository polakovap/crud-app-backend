const bcrypt = require('bcrypt');
const User = require('../models/user.model');

const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    //hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user record
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
    registerUser
};
