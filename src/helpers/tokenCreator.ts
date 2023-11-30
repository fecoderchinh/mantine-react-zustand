import { getAccessToken } from '@/helpers/localStorage'
export const getHeaderInfo = async () => {
   const token = await getAccessToken()
   return {
      headers: {
         'Content-Type': 'application/json',
         Authorization: `Bearer ${token}`,
         // 'Cache-Control': 'max-age=31536000'
      },
   }
}

export const getFormDataHeader = async () => {
   const token = await getAccessToken()
   return {
      headers: {
         'Content-Type': 'multipart/form-data',
         Authorization: `Bearer ${token}`,
         // 'Cache-Control': 'max-age=31536000'
      },
   }
}
