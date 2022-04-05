import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/User.js"

export const signin = async (req, res) => {
    const { user, password } = req.body
    console.log(user)
    try {
        const existingUser = await User.findOne({ user })
        
        if(!existingUser) return res.status(404).json({message: "User doesn't exist"})
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)
        if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" })
        const token = jwt.sign({ user: existingUser.user, id: existingUser._id }, "secret123", { expiresIn: "1h" })
        res.status(200).json({result: existingUser, token})
    } catch (error) {
        res.status(500).json({message: "Something went wrong"})
    }
}

export const signup = async (req, res) => {
    const { user, password } = req.body
    try {
        const existingUser = await User.findOne({ user })
        if(existingUser) return res.status(400).json({message: "User already exists"})
        const hashedPassword = await bcrypt.hash(password, 12)
        const result = await User.create({ user, password: hashedPassword })
        const token = jwt.sign({ user: result.user, id: result._id }, "secret123", { expiresIn: "1h" })
        res.status(200).json({ result, token })
    } catch (error) {
        res.status(500).json({message: "Something went wrong"})
    }
}