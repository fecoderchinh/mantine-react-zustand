import { default as axios } from 'axios'

const API_URL = `${__VITE_BACKEND_URL__}`

const login = async (formData: { username: string; password: string }) => {
   return await axios.post(API_URL + 'auth/login', { ...formData })
}

const logout = async () => {
   return await axios.post(API_URL + 'auth/logout')
}

export const authAPI = {
   login,
   logout,
}
