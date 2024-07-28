import User from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// post request
export const postUser = async (req, res) => {
    const { name, email, passwordHash, phone, isAdmin, street, apartment, zip, city, country } = req.body;

    try {
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(409).json({ error: "This user already exists!" });
        }

        const hashedPassword = await bcrypt.hash(passwordHash, 10);
        const newUser = new User({
            name,
            email,
            passwordHash: hashedPassword,
            phone,
            isAdmin,
            street,
            apartment,
            zip,
            city,
            country
        });

        const savedUser = await newUser.save();
        return res.status(201).json(savedUser);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
