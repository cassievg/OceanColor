import express from 'express';
import User from '../models/user.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.get('/:id', async (req, res) => {
    const { id } = req.params;
    
    try {
        const users = await User.find({ id });
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.post('/', async (req, res) => {
    const user = req.body;
    const newUser = new User({ ...user });

    try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
    } catch (err) {
    res.status(400).json({ message: err.message });
    }
});


router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { username, email, phone, password, level } = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(
        id,
        { username, email, phone, password, level },
        { new: true }
        );
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await User.findByIdAndDelete(id);
        res.json({ message: 'User deleted' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

export default router;