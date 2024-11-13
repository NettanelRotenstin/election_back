import { sign } from "jsonwebtoken";
import userSchema, { IUser } from "../models/userSchema";
import { LoginDto, ProfileDto } from "../types/loginDTO";
import { compare, hash } from "bcrypt";

export const registerService = async (user: IUser) => {
    try {
        const encPass = await hash(user.password, 10)

        const { userName,isAdmin } = user

        const dbUser = new userSchema({ userName, password: encPass ,isAdmin})

        return await dbUser.save()

    } catch (error) {

        console.log(`can't register`)
    }
}

export const loginService = async (user: LoginDto) => {
    try {
        const userFromDB = await userSchema.findOne({ userName: user.userName }).lean()
        if (!userFromDB) throw new Error(`user not found`)
        const match = await compare(user.password, userFromDB.password)
        if (!match) throw new Error('incorrect details')
        const token = await sign({
            userId: userFromDB._id,
            isAdmin: userFromDB.isAdmin,
            userNmae: userFromDB.userName
        }, process.env.SECRET_JWT!,{expiresIn:"5m"})
        return {...userFromDB,token,password:"****"}
    } catch (error) {
        console.log(`error in login`)
    }
}

export const getUserData = async (user: ProfileDto) => {
    try {
      if (!user.id) throw new Error("Missing user data, [id] is required");
      const currUser = await userSchema.findById(user.id).lean();
      return { hasVoted: currUser?.hasVoted, votedFor: currUser?.votedFor };
    } catch (err) {
      console.log(err);
      throw new Error("Can't create new user");
    }
  };