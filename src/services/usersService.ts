import { sign } from "jsonwebtoken";
import userSchema, { IUser } from "../models/userSchema";
import { loginDTO } from "../types/loginDTO";
import { compare, hash } from "bcrypt";

export const registerService = async (user: IUser) => {
    try {
        const encPass = await hash(user.password, 10)

        const { userName, isAdmin, hasVoted, votedFor } = user

        const dbUser = new userSchema({ userName, password: encPass })

        return await dbUser.save()

    } catch (error) {

        console.log(`can't register`)
    }
}

export const loginService = async (user: loginDTO) => {
    try {
        const userFromDB = await userSchema.findOne({ userName: user.userName })
        if (!userFromDB) throw new Error(`user not found`)
        const match = await compare(user.password, userFromDB.password)
        if (!match) throw new Error('incorrect details')
        const token = await sign({
            userId: userFromDB._id,
            isAdmin: userFromDB.isAdmin,
            userNmae: userFromDB.userName
        }, process.env.SECRET_JWT!)
        return userFromDB
    } catch (error) {
        console.log(`error in login`)
    }
}