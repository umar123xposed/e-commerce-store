import User from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

//get request
export const getUser= async(req,res)=>{
    try {
        const findUsers= await User.find().select("-passwordHash")
        if(!findUsers){
            return res.status(404).json({error:"No user in the database"})
        }
        return res.status(200).json(findUsers)
    } catch (error) {
        return res.status(500).json({error:error.message})
        
    }
}

//get by id request
export const  getById= async(req,res)=>{
    const id= req.params.id
    try {
        const findUser= await User.findById(id).select("-passwordHash")
        if(!findUser){
            return res.status(404).json({error:"No user in the database"})
        }
        return res.status(200).json(findUser)

    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

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
