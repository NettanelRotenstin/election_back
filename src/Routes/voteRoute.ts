import { Request, Response } from "express"
import { handleNewVote } from "../services/voteService"
import { VoteDto } from "../types/VoteDto";

export const vote = async (req: Request<any, any, VoteDto>, res: Response) => {
    try {
      const data = await handleNewVote(req.body);
      res.json({ data });
    } catch (err) {
      res.status(500).json({ err });
    }
  };