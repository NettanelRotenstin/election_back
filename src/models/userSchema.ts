import mongoose, { Schema, Document } from "mongoose"
export interface IUser extends Document {
    userName: string
    password: string
    isAdmin: boolean
    hasVoted: boolean
    votedFor?: Schema.Types.ObjectId | null
}
const userSchema = new Schema<IUser>({
    userName: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    hasVoted: {
        type: Boolean,
        default: false
    },
    votedFor: {
        type: Schema.Types.ObjectId,
        ref: 'Candidate',
        default:null
    }
})
export default mongoose.model('User', userSchema)