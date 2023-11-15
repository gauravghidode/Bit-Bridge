import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    about: {type: String},
    tags: {type: [String]},
    result: [{
        quizId:{
            type: mongoose.Schema.Types.ObjectId,
        },
        marks:{
            type: Number
        }
    }],
    joinedOn: {type: Date, default: Date.now}
})

export default mongoose.model("User", userSchema);