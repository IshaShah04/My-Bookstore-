// Quite Bookstore – User Authentication Routes
import express from "express";
import { signup, login } from "../controller/user.controller.js";

const router = express.Router();

// New user registration
router.post("/signup", signup);

// User login
router.post("/login", login);

export default router;
