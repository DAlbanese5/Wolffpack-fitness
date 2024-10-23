const express = require("express");
const morgan = require("morgan");
const bcrypt = require("bcrypt"); // Import bcrypt for password hashing
const jwt = require("jsonwebtoken"); // Import JWT for token generation
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const app = express();
const PORT = process.env.PORT || 5000;
const prisma = new PrismaClient();

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Token generation function
const generateToken = (user) => {
  return jwt.sign({ id: user.id, username: user.username }, "yourSecretKey", {
    expiresIn: "1h",
  });
};

app.post("/api/auth/register", async (req, res, next) => {
  const { username, email, password, bio, isAdmin = false } = req.body;

  try {
    // Validate input
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ message: "Username, email, and password are required." });
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: "Email already in use." });
    }

    // Hash password before storing
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        bio,
        isAdmin, // Save the isAdmin field
      },
    });

    // Generate a token for the new user
    const token = generateToken(newUser);

    res.status(201).json({ message: "User registered successfully", token });
  } catch (err) {
    console.error("Error during registration:", err); // Add this line to log the error
    res.status(500).json({ message: "Internal server error." });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
