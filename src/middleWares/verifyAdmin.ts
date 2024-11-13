import { NextFunction, Request, Response } from "express";
import Jwt from "jsonwebtoken";

export default (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers["authorization"]
        if (!token) {
            res.status(401).json({
                err: "missing token"
            })
            return
        }
        const payLoad = Jwt.verify(token[0], process.env.SECRET_JWT!);
        (req as any).user = payLoad
        if (!(payLoad as any).isAdmin) {
            res.status(403).json({ msg: "admin only" })
        }
        next()
    } catch (error) {
        res.status(401).json({ error })
    }
}