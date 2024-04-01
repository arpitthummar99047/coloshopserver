const User = require("../models/user_modals");
const bcrypt = require("bcryptjs");

// Home logic
const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to home");
  } catch (error) {
    res.status(500).send("Error");
  }
};

// Register logic
const register = async (req, res) => {
  try {
    const { username, email, password, phone } = req.body;

    // Validation
    if (!username || !email || !password || !phone) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    let userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Password hashing

    // Create new user
    const newUser = new User({
      username,
      email,
      password,
      phone,
    });

    // Save user to database
    await newUser.save();

    // Send response indicating successful registration
    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    // Error handling

    res
      .status(500)
      .json({ message: "Registration failed. Please try again later." });
  }
};

// Login logic
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res
        .status(400)
        .json({ message: "Don't have an account. Please register first." });
    }

    // Validate password
    const isPasswordValid = await bcrypt.compare(password, userExist.password);

    if (isPasswordValid) {
      // Generate token and send response
      res.status(200).json({
        message: { userExist },
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid password or email Id ddd" });
    }
  } catch (error) {
    res.status(500).json({ message: "Login failed. Please try again later." });
  }
};

// User logic to send data
const user = async (req, res) => {
  try {
    const userData = req.user;
    res.status(200).json({ userData });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving user data." });
  }
};

module.exports = { home, register, login, user };
