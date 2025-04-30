import { create } from 'zustand'
import axios from 'axios'
import { toast } from 'react-toastify'
let route = `${import.meta.env.VITE_SERVER_URL}/api/widgets`

const widgetStore = create((set,get) => ({

    getWidgets: async () => {
        const currentRoute = route
        console.log("currentRoute", currentRoute)

        try {
            const response = await axios.get(currentRoute, { withCredentials: true })

            return response
        }
        catch (err){
            toast.error(err.message)
        }
    },

    updateWidgets: async (widgets) => {
        const currentRoute = `${route}/update`

        try {
            const response = await axios.put(currentRoute, { widgets }, { withCredentials: true })

            return response
        }
        catch (err){
            toast.error(err.message)
        }
    }
}))

export default widgetStore