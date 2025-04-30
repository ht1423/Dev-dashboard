import User from "../../models/User.js"

const getUser = async (req,res) => {
    const userId = '681231a61025335b294847d0'

    try {
        const user = await User.findById(userId)

        if(!user){
            return res.status(404).json({
                msg: 'User not found'
            })
        }

        return res.json({
            msg: 'user found',
            user
        })
    }
    catch (err){
        console.error('getUser route error', err)

        return res.status(500).json({
            msg: 'Server error'
        })
    }
}

export default getUser