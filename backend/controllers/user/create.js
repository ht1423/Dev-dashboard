import User from "../../models/User.js"
import Widget from "../../models/Widget.js"

const create = async (req,res) => {

    const widgetTypes = ['github','stackoverflow','notes','clock','timer','todo','weather','links','quotes']

    const widgets = widgetTypes.map((type) => ({
        type,
        settings: getDefaultSettings(type)
    }))

    const user = await User.create({})

    const widgetsBundle = await Widget.create({
        userId: user._id,
        widgets,
        visible: true
    })

    await User.findByIdAndUpdate(user._id, { widgetsBundle: widgetsBundle._id })

    return res.json({
        msg: 'user created',
        user
    })
}

const getDefaultSettings = (type) => {
    const settings = {
        github: { username: null },
        stackoverflow: { profileId: null },
        notes: { notes: [] },
        clock: { timezone: "Asia/Kolkata", format: "24hr" },
        timer: { duration: 0 },
        todo: { tasks: [] },
        weather: { city: "Delhi", unit: "metric" },
        links: { favoriteLinks: [] },
        quotes: { quote: "Default Quote" }
    }

    return settings[type] || {}
}

export default create