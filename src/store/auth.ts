/* eslint-disable @typescript-eslint/no-explicit-any */
import { authAPI } from '@/services/auth'
import type { AccessInterface, TokenInterface, UserInterface } from '@/types/auth'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface AuthPayloadInterface {
   authState?:
      | {
           user?: UserInterface
           token?: TokenInterface
           access?: AccessInterface
        }
      | undefined
   isAuthenticated?: boolean
   error?: any
}

interface AuthState {
   isAuthenticated: boolean
   authState?: AuthPayloadInterface | undefined
   error?: any
   login: (username: string, password: string) => Promise<AuthPayloadInterface | undefined>
   logout: () => Promise<{ isAuthenticated: boolean }>
}

export const useAuthStore = create<AuthState>()(
   devtools(
      persist(
         (set) => ({
            isAuthenticated: false,
            authState: undefined,
            error: undefined,
            login: async (username: string, password: string): Promise<AuthPayloadInterface | undefined> => {
               try {
                  const res = await authAPI.login({ username, password })

                  if (res) {
                     const result = {
                        isAuthenticated: true,
                        authState: res.data.payload,
                        error: undefined,
                     }

                     set({
                        isAuthenticated: result.isAuthenticated,
                        authState: result.authState,
                        error: result.error,
                     })

                     return result
                  }
               } catch (error) {
                  const result = {
                     isAuthenticated: false,
                     authState: undefined,
                     error,
                  }

                  set({
                     isAuthenticated: result.isAuthenticated,
                     authState: result.authState,
                     error: result.error,
                  })

                  return result
               }

               // If there's no result, return undefined
               return undefined
            },
            logout: async () => {
               await authAPI.logout()
               set({
                  isAuthenticated: false,
                  authState: undefined,
                  error: undefined,
               })
               return { isAuthenticated: false }
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
