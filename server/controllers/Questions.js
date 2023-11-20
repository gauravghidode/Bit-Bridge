import Questions from '../models/Questions.js'
import mongoose from 'mongoose'
import Subject from '../models/subjects.js';
import Tag from '../models/Tag.js';
export const AskQuestion = async (req, res) => {
    try {
        const postQuestionData = req.body;
        const postQuestion = new Questions(postQuestionData);

        await Subject.findOneAndUpdate({ subjectName: postQuestion.selectedSubject }, {
            $push: {
                question: postQuestion._id
            }
        })
        postQuestionData.questionTags.forEach(async (tag) => {
            tag = tag.toLowerCase()
            const tagDetails = await Tag.findOne({ tagName: tag });
            if (tagDetails) {
                await Tag.findByIdAndUpdate(tagDetails._id, {
                    $push: {
                        question: postQuestion._id
                    }
                })
            } else {
                await Tag.create({ tagName: tag, question: [postQuestion._id] })
            }
        })
        await postQuestion.save();
        res.status(200).json("Posted a question successfully")
    } catch (error) {
        console.log(error);
        res.status(409).json("Couldn't post a new question");
    }
}

export const getAllQuestion = async (req, res) => {
    try {
        const questionList = await Questions.find();
        res.status(200).json(questionList);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteQuestions = async (req, res) => {
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('Question unavailable...');
    }
    try {
        await Questions.findByIdAndRemove(_id);
        res.status(200).json("Question deleted Successfully...");
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const voteQuestion = async (req, res) => {
    const { id: _id } = req.params;
    const { value, userId } = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('Question unavailable...');
    }

    try {
        const question = await Questions.findById(_id);
        const upIndex = question.upVote.findIndex((id) => id === String(userId));
        const downIndex = question.downVote.findIndex((id) => id === String(userId));

        if (value === 'upVote') {
            if (downIndex !== -1) {
                question.downVote = question.downVote.filter((id) => id !== String(userId));
            }
            if (upIndex === -1) {
                question.upVote.push(userId);
            }
            else {
                question.upVote = question.upVote.filter((id) => id !== String(userId));
            }
        }
        else if (value === 'downVote') {
            if (upIndex !== -1) {
                question.upVote = question.upVote.filter((id) => id !== String(userId));
            }
            if (downIndex === -1) {
                question.downVote.push(userId);
            }
            else {
                question.downVote = question.downVote.filter((id) => id !== String(userId));
            }
        }
        await Questions.findByIdAndUpdate(_id, question);
        res.status(200).json("Voted successfully...")
    } catch (error) {
        res.status(404).json({ message: 'id not found...' });
    }
}