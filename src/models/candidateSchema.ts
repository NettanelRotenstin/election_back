import mongoose, { Schema, Document } from "mongoose"

export interface ICandidate extends Document {
    name: string
    image: string
    votes: number
}

const candidateSchema = new Schema<ICandidate>({
    name: {
        type: String,
        unique: true
    },
    image: {
        type: String,
    },
    votes:{
        type:Number,
        default:0
    }
})

export default mongoose.model('Candidate', candidateSchema)