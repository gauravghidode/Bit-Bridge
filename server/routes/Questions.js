import express from 'express'

import { AskQuestion } from '../controllers/Questions.js'
import { getAllQuestion } from '../controllers/Questions.js'

const router = express.Router();

router.post('/Ask', AskQuestion)
router.get('/get', getAllQuestion)

export default router;