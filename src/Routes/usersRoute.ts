import { Request, Response } from "express";
import { getUserData, loginService, registerService } from "../services/usersService";
import { ProfileDto } from "../types/loginDTO";

export const login = async(req:Request,res:Response) =>{
    try {
        const result = await loginService(req.body)
        res.status(200).json(
            result
        )
    } catch (error) {
        res.json({msg:"not ok"})
    }
}

export const register = async(req:Request,res:Response) =>{
    try {
        const newUser = await registerService(req.body)
        res.status(201).json({
            newUser
        })
    } catch (error) {
        res.status(500).json({})
    }
}

export const profile = async (
    req: Request<any, any, ProfileDto>,
    res: Response
  ) => {
    try {
      const data = await getUserData(req.body);
      res.status(201).json(data);
    } catch (err) {
      res.status(400).json((err as Error).message);
    }
  };