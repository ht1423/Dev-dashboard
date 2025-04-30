import User from "../../models/User.js"

const getWidgets = async (req,res) => {
    const userId = '681231a61025335b294847d0'

    try {
        const user = await User.findById(userId).populate('widgetsBundle')

        if(!user){
            return res.status(404).json({
                msg: 'User not found'
            })
        }

        return res.json({
            msg: 'user found',
            widgets: user.widgetsBundle.widgets
        })
    }
    catch (err){
        console.error('getUser route error', err)

        return res.status(500).json({
            msg: 'Server error'
        })
    }
}

export default getWidgets