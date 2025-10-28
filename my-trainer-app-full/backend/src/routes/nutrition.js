import express from 'express';
import { authMiddleware, requireRole } from '../middlewares/authMiddleware.js';
import { createMealPlan, getMealPlansForStudent } from '../controllers/nutritionController.js';
const router = express.Router();
router.post('/', authMiddleware, requireRole('trainer'), createMealPlan);
router.get('/student/:id', authMiddleware, getMealPlansForStudent);
export default router;
