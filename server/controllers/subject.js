import Subject from "../models/subjects.js";

export const addSubject = async (req, res) =>{
    const {subjectName, subjectDescription} = req.body;
    try {
        if(!subjectName){
            return res.status(403).json({
                success: false,
                message: "Subject Name is required."
            })
        }
        await Subject.create({subjectName, subjectDescription})
        return res.status(200).json({
            success: true,
            message: "Subject created Successfully"
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong, while creating subject."
        })
    }
}

export const getSubjects = async(req, res) =>{
    try{
        const data = await Subject.find({},{subjectName: true, subjectDescription: true});
        return res.status(200).json({
            success: true,
            message:"Subjects fetched successfully.",
            data
        })
    } catch(error){
        return res.status(500).json({
            success: false,
            message: "Something went wrong."
        })
    }
}