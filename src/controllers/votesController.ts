import { Router } from "express";
import verifyUser from "../middleWares/verifyUser";
import { vote } from "../Routes/voteRoute";

const router = Router()

router.post('/',verifyUser,vote)
export default router