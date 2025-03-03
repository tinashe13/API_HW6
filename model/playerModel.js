import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
})

export default mongoose.model("Player", playerSchema)