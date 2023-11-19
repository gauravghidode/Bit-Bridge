import express from 'express'

import { addSubject, getSubjects } from "../controllers/subject.js";

const router = express.Router();

router.post('/addSubject', addSubject);
router.get('/getSubjects', getSubjects);

export default router;
