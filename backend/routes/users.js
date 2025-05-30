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
        const users = await User.find(id);
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
