import express from 'express'
import { githubCallback, githubLogin, setGithubUser } from '../controllers/widgets/github.js'
const router = express.Router()

router.get('/login', githubLogin)
router.get('/callback', githubCallback)
router.get('/user', setGithubUser)

export default router