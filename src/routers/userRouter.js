const express = require("express");
const User = require("../models/user");

const router = express.Router();

// 1) POST → Add 5 users
router.post("/users", async (req, res) => {
  try {
    const users = await User.insertMany(req.body);
    res.status(201).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2) GET → Retrieve all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3) GET by ID
router.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 4) PATCH → Update user
router.patch("/users/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedUser)
      return res.status(404).json({ message: "User not found" });

    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 5) DELETE → Delete user
router.delete("/users/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser)
      return res.status(404).json({ message: "User not found" });

    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
