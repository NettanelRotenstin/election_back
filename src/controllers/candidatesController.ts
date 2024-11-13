import { Router } from "express";
import { ceed, getCandidateList } from "../services/candidateService";
import { getList, sid } from "../Routes/candidatesRoute";
import verifyUser from "../middleWares/verifyUser";

const router = Router()


router.get('/',verifyUser,getList)

router.post('/ceed',sid)

export default router