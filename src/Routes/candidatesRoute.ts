import { Request, Response } from "express";
import { ceed, getCandidateList } from "../services/candidateService";


export const getList = async(req:Request,res:Response)=>{
    try {
        const list = await getCandidateList()
        res.status(200).json(list)
    } catch (error) {
        res.status(500).send()
    }
}

export const sid = async (req:Request,res:Response) => {
    try {
        await ceed()
        console.log(6565)
        res.status(201)
    } catch (error) {
        
        console.log(error);
        res.status(500)
    }
}