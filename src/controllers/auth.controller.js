import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { createAccessToken } from '../libs/jwt.js'

var expiryDate = new Date();
expiryDate.setDate(expiryDate.getDate() + 30);

//register funtion
export const register = async (req, res) => {
    const { username, email, password } = req.body

    try {
        const userFound = await User.findOne({ email })
        if (userFound) return res.status(400).json(["The email already exists!"])

        const passwordHash = await bcrypt.hash(password, 10)
        const newUser = new User({
            username,
            email,
            password: passwordHash
        })
        const savedUser = await newUser.save()
        const token = await createAccessToken({ id: savedUser._id })
        res.cookie('token', token, {
            expires: expiryDate,
            sameSite: 'None', 
            secure: true, 
            httpOnly: true 
        });
        res.json({
            id: savedUser.id,
            username: savedUser.username,
            email: savedUser.email,
            createdAt: savedUser.createdAt,
            updatedAt: savedUser.updatedAt
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
//login function
export const login = async (req, res) => {
    const { email, password } = req.body
    try {
        //email comparation
        const userFound = await User.findOne({ email });
        if (!userFound) return res.status(400).json([ 'User not found, email or password invalid']);
        //password comparation
        const isMatch = await bcrypt.compare(password, userFound.password);
        if (!isMatch) return res.status(400).json(['User not found, email or password invalid']);

        const token = await createAccessToken({ id: userFound._id })
        res.cookie('token', token, {
            expires: expiryDate,
            sameSite: 'None', 
            secure: true, 
            httpOnly: true 
        });
        res.json({
            id: userFound.id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
//logout function
export const logout = (req, res) => {
    res.cookie('token', '', { expires: new Date(0) })
    return res.sendStatus(200)
};
//get profile function
export const getProfile = async (req, res) => {
    const userFound = await User.findById(req.user.id)
    if (!userFound) return res.status(400).json({ message: 'User not found' });
    return res.json({
        id: userFound.id,
        username: userFound.username,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt
    });
}
//verify token function
export const verifyToken = async (req, res) => {
    const { token } = req.cookies

    if (!token) return res.status(401).json({ message: 'Not authorized' })

    jwt.verify(token, process.env.SECRET_KEY, async (err, user) => {
        if (err) return res.status(401).json({ message: 'Not authorized' })

        const userFound = await User.findById(user.id)
        if (!userFound) return res.status(401).json({ message: 'Not authorized' })

        return res.json({
            id: userFound.id,
            username: userFound.username,
            email: userFound.email,
        })
    })
}