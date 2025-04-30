import User from "../../models/User.js"

const create = async (req,res) => {
    
    const user = await User.create({
        widgets: ['github','stackoverflow','notes','clock','timer','todo','weather','links','quotes']
    })

    return res.json({
        msg: 'user created',
        user
    })
}

export default create