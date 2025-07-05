import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "An account with this email already exists." });
        }

        const hashedPassword = await bcryptjs.hash(password, 10);
        const createduser=newUser({
            fullname:fullname,
            email:email,
            password:password,

        });
        await newUser.save();
        res.status(201).json({user:"user created succsessfully"});
    } catch (error) {
        console.error("Signup Error:", error.message);
        res.status(500).json({ message: "Signup failed. Please try again later." });
    }
};

// Handle user login
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password." });
        }

        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password." });
        }

        res.status(200).json({
            message: "Welcome back to Quite, " + user.fullname + "!",
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email,
            },
        });
    } catch (error) {
        console.error("Login Error:", error.message);
        res.status(500).json({ message: "Login failed. Please try again later." });
    }
};
