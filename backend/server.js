import express from 'express';
import mongoose, { mongo } from 'mongoose';
import dotenv from 'dotenv';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import swaggerUi from 'swagger-ui-express';

import ticketRoutes from './routes/tickets.js';
import userRoutes from './routes/users.js';
import authRoutes from './routes/auth.js';
import swaggerSpec from './utils/swagger.js';

async function run() {
    dotenv.config();

    const app = express();
    const PORT = process.env.PORT || 5000;

    await mongoose.connect(process.env.MONGO_URI);

    app.use(express.json());
    app.use(session({
        secret: 'secret',
        resave: true,
        saveUninitialized: false,
        cookie: {
            secure: false,
            httpOnly: false,
        },
        store: MongoStore.create({ client: mongoose.connection.getClient() })
    }));

    // API Documentation endpoint
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
        customSiteTitle: "OceanColor Support System API",
        customCss: '.swagger-ui .topbar { display: none }',
        customfavIcon: '/favicon.ico'
    }));

    app.use('/api/ticket', ticketRoutes);
    app.use('/api/user', userRoutes);
    app.use('/api/auth', authRoutes);

    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
}

run();
