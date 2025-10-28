import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import exercisesRoutes from './routes/exercises.js';
import routinesRoutes from './routes/routines.js';
import progressRoutes from './routes/progress.js';
import nutritionRoutes from './routes/nutrition.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/exercises', exercisesRoutes);
app.use('/api/routines', routinesRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/nutrition', nutritionRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> console.log(`Backend running on ${PORT}`));
