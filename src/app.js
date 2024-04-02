import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors'

import authRoutes from './routes/auth.routes.js'
import tasksRoutes from './routes/tasks.routes.js'
import trainingRoutes from './routes/training.routes.js'
import badhabitsRoutes from './routes/badhabits.routes.js'

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173'
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api',authRoutes);
app.use('/api',tasksRoutes);
app.use('/api',trainingRoutes);
app.use('/api',badhabitsRoutes);

export default app;