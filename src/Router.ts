import { hello } from './api/index'
import express from 'express'

const router = express.Router()

router.get('/api/hello', hello)

export default router