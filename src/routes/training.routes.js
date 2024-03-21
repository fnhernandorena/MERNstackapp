import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validateSchemas.js";
import { createTrainingSchema } from "../schemas/training.schema.js";
import { createTraining, deleteTraining, getTraining, getTrainings, updateTraining } from "../controllers/training.controller.js";

const router = Router();

router.get('/training', authRequired, getTrainings)
router.post('/training', authRequired, validateSchema(createTrainingSchema), createTraining)
router.get('/training/:id', authRequired, getTraining)
router.put('/training/:id', authRequired, updateTraining)
router.delete('/training/:id', authRequired, deleteTraining)

export default router;