import { Router } from "express";
import { getCandidateList } from "../services/candidateService";
import { getList } from "../Routes/candidatesRoute";

const router = Router()

router.post('/',()=>{})

router.get('/candidates',getList)

export default router