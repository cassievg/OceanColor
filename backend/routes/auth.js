import express from 'express';
import User from '../models/user.js';

const router = express.Router();

router.post('/login', async (req, res) => {
    const creds = req.body;

    // Set session data
    const user = await User.findOne({ email: creds.email });

    if (user && user.password === creds.password) {
        res.session = {
            user
        };
        console.log(res.session);
        res.send('Logged in');
    }
    else {
        res.send('Log in failed');
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