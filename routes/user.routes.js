import { Router } from "express";

const router = Router();

// GET all users
router.get("/", (req, res) => {
  res.json({ message: "Get all users" });
});

// GET user by ID
router.get("/:id", (req, res) => {
  res.json({ message: "Get user by ID", id: req.params.id });
});

// POST create user
router.post("/", (req, res) => {
  res.json({ message: "Create user", data: req.body });
});

// PUT update user
router.put("/:id", (req, res) => {
  res.json({ message: "Update user", id: req.params.id });
});

// DELETE user
router.delete("/:id", (req, res) => {
  res.json({ message: "Delete user", id: req.params.id });
});

export default router;