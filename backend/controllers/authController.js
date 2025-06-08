// backend/controllers/authController.js
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../model/User.js';

import dotenv from 'dotenv';
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'johnasmaysecretmayanosyasatarubs';

export const register = async (req, res) => {
  try {

    // 1. get data from req.body
    const { name, email, password } = req.body;

    // 2. backend validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // 3. setup brcypt hash password
    const hashPassword = await bcrypt.hash(password, 10);
    // 4. create user with hash password
    await User.create({ name, email, password: hashPassword });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export const login = async (req, res) => {
  try {

    // 1. get data from req.body
    const { email, password } = req.body;

    // 2. backend validation
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User does not exist' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // 3. generate token for login 
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d' });

    // 4. send token to client
    res.status(200).json({
      token,
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
