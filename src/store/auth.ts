import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const getUser = () => {
   return new Promise<{ name: string; email: string }>((resolve) => {
      setTimeout(() => {
         const user = {
            name: 'John Doe',
            email: 'john.d@domain.com',
         }

         resolve(user)
      }, 1000)
   })
}

interface AuthState {
   isAuthenticated: boolean
   name: string
   email: string
   login: () => Promise<{ isAuthenticated: boolean }>
   logout: () => void
}

export const useAuthStore = create<AuthState>()(
   devtools(
      persist(
         (set) => ({
            isAuthenticated: false,
            name: '',
            email: '',
            login: async () => {
               const user: { name: string; email: string } = await getUser()

               set({
                  isAuthenticated: true,
                  ...user,
               })

               return { isAuthenticated: true }
            },
            logout: () => {
               set({
                  isAuthenticated: false,
                  name: '',
                  email: '',
               })
            },
         }),
         {
            name: 'AuthPersist',
            // storage: createJSONStorage(() => localStorage),
         }
      ),
      {
         store: 'Auth',
      }
   )
)
