import { Router } from "express";
import { login, profile, register } from "../Routes/usersRoute";
import { registerService } from "../services/usersService";
import verifyUser from "../middleWares/verifyUser";

const router = Router()

router.post('/login', login )

router.post('/register',  register )

router.post('/profile',verifyUser,profile)

export default router