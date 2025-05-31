import express from 'express';
import User from '../models/user.js';

const router = express.Router();

router.post('/login', async (req, res) => {
    const creds = req.body;

    // Set session data
    const user = await User.findOne({ email: creds.email });

    if (user && user.password === creds.password) {
        req.session.user = {
            _id: user._id,
            username: user.username,
            email: user.email,
            phone: user.phone,
            password: user.password,
            level: user.level,
            closed: user.closed,
            progress: user.progress
        };

        res.json(user);
    }
    else {
        console.error(err)
        res.status(400).send('User does not exist');
    }
});

router.post('/logout', (req, res) => {
    // Destroy session
    req.session.destroy((err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error logging out');
        } else {
            res.send('Logged out');
        }
    });
});

export default router;