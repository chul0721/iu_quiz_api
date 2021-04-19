import { hello, quiz, main } from './api/index'
import express from 'express'

const router = express.Router()

router.get('/', main)
router.get('/api', main)
router.get('/api/hello', hello)
router.get('/api/quiz', quiz)

export default router