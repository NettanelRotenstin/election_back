import { NextFunction, Request, Response } from "express";
import Jwt from "jsonwebtoken";

export default (req: Request, res: Response, next: NextFunction) => {
    try {
        const token:string = req.headers["authorization"] as string
        if (!token) {
            res.status(401).json({
                err: "missing token"
            })
            return
        }
        const payLoad = Jwt.verify(token, process.env.SECRET_JWT!);
        (req as any).user = payLoad
        next()
    } catch (error) {
        res.status(401).json(error)
    }
}