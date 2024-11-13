import { Schema } from "mongoose"
import candidateSchema, { ICandidate } from "../models/candidateSchema"
import userSchema, { IUser } from "../models/userSchema"
import { VoteDto } from "../types/VoteDto";

export const handleNewVote = async (vote: VoteDto) => {
    try {
      const user:IUser|null = await userSchema.findById(vote.userId)
      if(user?.hasVoted == true) return
      await userSchema.findByIdAndUpdate(vote.userId, {
        $set: {
          hasVoted: true,
          votedFor: vote.candidateId,
        },
      });
      await candidateSchema.findByIdAndUpdate(vote.candidateId, {
        $inc: {
          votes: 1,
        },
      }); 
      return {
        status: "DONE",
      };
    } catch (err) {
      return {
        status: "ERROR",
        err: err as Error,
      };
    }
  };