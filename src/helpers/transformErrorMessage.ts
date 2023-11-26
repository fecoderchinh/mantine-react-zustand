/* eslint-disable @typescript-eslint/no-explicit-any */
import { hasOwnProperty } from '@/helpers/utils'

export function getFirstErrorFromResponse(error: any) {
   const errorFormatted = getResponseError(error)
   let errorMessage = ''
   if (typeof errorFormatted === 'object') {
      for (const i in errorFormatted) {
         errorMessage = Array.isArray(errorFormatted[i]) ? errorFormatted[i][0] : 'Error'
         break
      }
   } else if (typeof errorFormatted === 'string') {
      errorMessage = errorFormatted
   }
   return errorMessage
}

export function getResponseError(error: {
  response: { data: { errors: any; message: any }; status: any; headers: any }
  message: any
  config: { url: any }
}) {
   const errorMessage = 'API Error, please try again.'
   if (typeof error !== 'object') {
      return errorMessage
   }

   if (
      hasOwnProperty(error, 'response') &&
    hasOwnProperty(error.response, 'data') &&
    hasOwnProperty(error.response.data, 'errors')
   ) {
      return error.response.data.errors
   }

   if (
      hasOwnProperty(error, 'response') &&
    hasOwnProperty(error.response, 'data') &&
    hasOwnProperty(error.response.data, 'message')
   ) {
      return error.response.data.message
   }

   if (hasOwnProperty(error, 'message')) {
      return error.message
   }

   // if (!error.response) {
   //   console.error(`API ${error.config.url} not found`)
   //   return errorMessage
   // }
   // if (process.env.NODE_ENV === 'development') {
   //   console.error(error.response.data)
   //   console.error(error.response.status)
   //   console.error(error.response.headers)
   // }

   return errorMessage
}