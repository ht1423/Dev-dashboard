import express from 'express'
const router = express.Router()
import create from '../controllers/user/create.js'
import getUser from '../controllers/user/getUser.js'

router.post('/create', create)
router.get('/', getUser)

export default router