import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { createBadHabit, deleteBadHabit, getBadHabit, getBadHabits, updateBadHabit } from "../controllers/badhabits.controller.js";
import { validateSchema } from "../middlewares/validateSchemas.js";
import { createBadHabitSchema } from "../schemas/badhabit.schema.js";

const router = Router();

router.get('/badhabits', authRequired, getBadHabits)
router.post('/badhabits', authRequired, createBadHabit)
router.get('/badhabits/:id', authRequired, getBadHabit)
router.put('/badhabits/:id', authRequired, updateBadHabit)
router.delete('/badhabits/:id', authRequired, deleteBadHabit)

export default router;