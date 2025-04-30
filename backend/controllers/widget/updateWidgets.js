import User from "../../models/User.js"
import Widget from "../../models/Widget.js"

const updateWidgets = async (req,res) => {
    const { widgets } = req.body
    const userId = '681231a61025335b294847d0'

    try {
        const updatedUser = await User.findByIdAndUpdate(userId)

        const widgetsBundleId = updatedUser.widgetsBundle._id

        const updatedWidgets = await Widget.findOneAndUpdate(widgetsBundleId, { widgets })
        
        if(!updatedUser){
            return res.status(404).json({
                msg: 'User not found'
            })
        }

        return res.json({
            msg: 'widgets updated successfully',
            widgets: updatedWidgets
        })
    }
    catch (err){
        console.error("updateWidgets route error", err)

        return res.status(500).json({
            msg: 'Server error'
        })
    }
}

export default updateWidgets