import { Router } from "express";
import { login, register, logout, getProfile, verifyToken } from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema} from '../middlewares/validateSchemas.js';
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

const router = Router();

router.get('/profile',authRequired, getProfile)
router.post('/register', validateSchema(registerSchema), register)
router.post('/login', validateSchema(loginSchema), login)
router.post('/logout', logout)
router.get('/verify', verifyToken)

export default router;