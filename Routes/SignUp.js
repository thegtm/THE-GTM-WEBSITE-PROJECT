import { Router } from "express";
import bcrypt from "bcrypt";
import connection from "../connection.js";

const SignUpRouter = Router();

// Email validation function
const isValidEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

const SignUp = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    // Validate email format
    if (!email || !isValidEmail(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    if (!username || !password) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const query = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
    connection.query(query, [username, email, hashedPassword], (queryError) => {
      if (queryError) {
        console.error("Error signing up:", queryError);
        return res.status(500).json({ error: "Internal server error" });
      }
      res.status(201).json({ message: "User signed up successfully" });
    });
  } catch (error) {
    console.error("Error during signup process:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

SignUpRouter.post("/signUp", SignUp);

export default SignUpRouter;
