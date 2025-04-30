import express from 'express'
import updateWidgets from '../controllers/widget/updateWidgets.js'
import getWidgets from '../controllers/widget/getWidgets.js'
const router = express.Router()

router.put('/update', updateWidgets)
router.get('/', getWidgets)

export default router