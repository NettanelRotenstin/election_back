import { Router } from "express";
import { login, register } from "../Routes/usersRoute";
import { registerService } from "../services/usersService";

const router = Router()

router.post('/login', login )

router.post('/register',  register )

export default router