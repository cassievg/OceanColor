import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import ticketRoutes from './routes/tickets.js';
import userRoutes from './routes/users.js';

async function run() {
    dotenv.config();

    const app = express();
    const PORT = process.env.PORT || 5000;

    await mongoose.connect(process.env.MONGO_URI);

    app.use(express.json());

    app.use('/api/ticket', ticketRoutes);
    app.use('/api/user', userRoutes);

    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
}

run();
