import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import session from 'express-session';

import ticketRoutes from './routes/tickets.js';
import userRoutes from './routes/users.js';
import authRoutes from './routes/auth.js';

async function run() {
    dotenv.config();

    const app = express();
    const PORT = process.env.PORT || 5000;

    await mongoose.connect(process.env.MONGO_URI);

    app.use(express.json());
    app.use(cors());
    app.use(session({
        secret: 'secret',
        resave: false,
        saveUninitialized: false,
    }));

    app.use((req, res, next) => {
        if (req.session) {
            console.log(req.session);
        }
        else {
            console.log('no session');
        }
    })

    app.use('/api/ticket', ticketRoutes);
    app.use('/api/user', userRoutes);
    app.use('/api/auth', authRoutes);

    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
}

run();
