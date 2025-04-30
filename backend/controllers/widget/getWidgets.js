import User from "../../models/User.js"

const getWidgets = async (req,res) => {
    const userId = '68116e4ac3ff7c5ea824b29e'

    try {
        const user = await User.findById(userId).populate('widgets')

        if(!user){
            return res.status(404).json({
                msg: 'User not found'
            })
        }

        return res.json({
            msg: 'user found',
            widgets: user.widgets
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