import mongoose from "mongoose";

const quizSchema = mongoose.Schema({
    quizName:{
        type: String,
        required: true
    },
    authorName:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    questions:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'QuizQuestion'
    }],
    type: {
        type: String,
        required: true
    }
})

export default mongoose.model("Quiz", quizSchema);