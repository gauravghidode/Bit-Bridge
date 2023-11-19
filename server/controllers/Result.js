import mongoose from "mongoose";
import Quiz from "../models/Quiz.js";
import User from "../models/auth.js"
export const getMyResult = async (req, res)=>{
    try {
        const {userid} = req.params;

        const result = await User.findById(userid, {
            result: true
        }).populate({
            path:"result",
            populate:({
                path: "quizId",
                select: {quizName: true, type: true}
            }),
        })
        return res.status(200).json({
            success: true,
            message: "Result fetched successfully.",
            data: result
        })
    } catch (error) {
        
    }
}

// export const QuizResult = async (req, res)=>{
//     try {
//         const {quizid, userid} = req.params;
//         const user = await User.findById(userid);
//         if(user.role !== "admin" || user.role !== "instructor"){
//             return res.status(403).json({
//                 success: false,
//                 message: "Your are not allowed to see this section"
//             })
//         }
//         const quiz = await Quiz.findById({})
//     } catch (error) {
        
//     }
// }
export const Quizzes = async (req, res)=>{
    try {
        const {userid} = req.params;
        const quiz = await Quiz.find({authorName: userid},{
            quizName: true,
            authorName: true,
            type: true,
            average: true,
        })
        res.status(200).json({
            success: true,
            quiz,
            userid
        })
    } catch (error) {
        console.log(error);
    }
}