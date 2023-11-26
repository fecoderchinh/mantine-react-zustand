/* eslint-disable @typescript-eslint/no-explicit-any */
export const setTokens = (authResponse: any) => {
   localStorage.setItem('user', JSON.stringify(authResponse.user))
   localStorage.setItem('token', JSON.stringify(authResponse.token))
}

export const removeTokens = () => {
   localStorage.removeItem('user')
   localStorage.removeItem('token')
}

export const getUser = () => localStorage.getItem('user') as string
export const getAccessToken = () => localStorage.getItem('token')?.slice(1, -1) as string
