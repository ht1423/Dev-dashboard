import express from 'express'
import updateWidgets from '../controllers/widget/updateWidgets.js'
import getWidgets from '../controllers/widget/getWidgets.js'
const router = express.Router()

router.get('/', getWidgets)
router.put('/update', updateWidgets)

export default router