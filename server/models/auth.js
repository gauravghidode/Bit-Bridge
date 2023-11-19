import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    about: {type: String},
    tags: {type: [String]},
    joinedOn: {type: Date, default: Date.now},
    role: {type: String, enum: ["student", "admin", "instructor"], default: 'student'},
    result: [
        {
            quizId:{
                type: mongoose.Schema.Types.ObjectId,
                ref:"Quiz"
            },
            marks: {
                type: Number
            },
            totalMarks:{
                type: Number
            }
        }
    ]
})

export default mongoose.model("User", userSchema);