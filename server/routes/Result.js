import express from 'express'

import { Quizzes, getMyResult } from "../controllers/Result.js";

const router = express.Router();

router.get('/getMyResult/:userid', getMyResult);
router.get('/:userid', Quizzes);
// router.get('/getSubjectQuestions/:subjectId', getSubjectQuestion);

export default router;
