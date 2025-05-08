import { create } from 'zustand'
import axios from 'axios'
import { toast } from 'react-toastify'
let route = `${import.meta.env.VITE_SERVER_URL}/api/github`

const githubStore = create((set,get) => ({
    gitUser: null,

    gitLogin: () => {
        const currentRoute = `${route}/login`

        try {
            const response = window.open(currentRoute, '_blank')

            console.log("Gitlogin response", response)

            return response
        }
        catch (err){
            toast.error(err.message)
        }
    },

    getGitUserData: async () => {
        const currentRoute = `${route}/user`

        try {
            const response = await axios.get(currentRoute, { withCredentials: true })

            set({ gitUser: response.data })
            
            return response
        }
        catch (err){
            set({ gitUser: null})
        }
    }

}))

export default githubStore