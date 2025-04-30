import express from 'express'
import { githubCallback, githubLogin } from '../controllers/widgets/github.js'
const router = express.Router()

router.get('/login', githubLogin)
router.get('/callback', githubCallback)

export default router