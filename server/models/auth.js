import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String, required: true, default: 'student', enum: ["student", "admin", "instructor"] },
    email: { type: String, required: true },
    password: { type: String, required: true },
    about: { type: String },
    tags: { type: [String] },
    joinedOn: { type: Date, default: Date.now }
})

export default mongoose.model("User", userSchema);