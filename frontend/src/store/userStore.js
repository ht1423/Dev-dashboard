import { create } from 'zustand'
import axios from 'axios'
import { toast } from 'react-toastify'
let route = `${import.meta.env.VITE_SERVER_URL}/api`

const userStore = create((set,get) => ({
    user: null,

    getUser: async () => {
        const currentRoute = `${route}/user`

        try {
            const response = await axios.get(currentRoute, { withCredentials: true })

            set({ user: response.data.user })

            return response
        }
        catch (err){
            set({ user: null })
            toast.error(err.message)
        }
    }
}))

export default userStore
