import express from 'express'

import { createQuiz, addQuestion, getAllQuesitons, getQuiz, submitQuiz, deleteQuestion, deleteQuiz } from '../controllers/Quiz.js'
const router = express.Router();

router.post('/createQuiz', createQuiz)
router.post('/createQuizQuestion', addQuestion)
// router.get('/getAllQuestion', getAllQuesitons);
router.post('/getQuiz', getQuiz);
router.post('/submitQuiz', submitQuiz);
router.post('/deleteQuestion', deleteQuestion);
router.post('/deleteQuiz', deleteQuiz);


export default router;