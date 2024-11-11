import { Request, Response } from "express";
import { ceed, getCandidateList } from "../services/candidateService";

export const ceedMonge = async(req:Request,res:Response) =>{
    try {
        await ceed()
    } catch (error) {
        console.log(`cant ceed`)
    }
}

export const getList = async(req:Request,res:Response)=>{
    try {
        const list = await getCandidateList()
        res.status(200).json({list})
    } catch (error) {
        res.status(500).send()
    }
}