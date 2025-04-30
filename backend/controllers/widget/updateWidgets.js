import User from "../../models/User.js"

const updateWidgets = async (req,res) => {
    const { widgets } = req.body
    const userId = '68116e4ac3ff7c5ea824b29e'

    try {
        const updatedUser = await User.findByIdAndUpdate(userId,{ widgets },{ new: true })
        
        if(!updatedUser){
            return res.status(404).json({
                msg: 'User not found'
            })
        }

        return res.json({
            msg: 'widgets updated successfully',
            widgets: updatedUser.widgets
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