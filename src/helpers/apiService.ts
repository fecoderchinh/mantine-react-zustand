/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import { history } from '@/helpers/history'
import { getFormDataHeader, getHeaderInfo } from '@/helpers/tokenCreator'
import { removeTokens } from '@/helpers/localStorage'
const handleResponse = (response: any) => {
   if (response.status === 401) {
      removeTokens()
      history.push('/auth')
   }
   if (response.data.status !== 'OK') {
      return response.data
   }
   return response
}

export const post = async (url: string, body: any) => {
   const header = await getHeaderInfo()
   try {
      const resp = await axios.post(url, body, header)
      return handleResponse(resp)
   } catch (err: any) {
      return handleResponse(err.response)
   }
}

export const get = async (url: any, params: any = {}) => {
   const header = await getHeaderInfo()
   try {
      const resp = await axios.get(url, { ...header, params })
      return handleResponse(resp)
   } catch (err: any) {
      throw handleResponse(err.response)
   }
}

export const put = async (url: any, body: any) => {
   const header = await getHeaderInfo()

   try {
      const resp = await axios.put(url, body, header)

      return handleResponse(resp)
   } catch (err: any) {
      throw handleResponse(err.response)
   }
}

export const patch = async (url: any, body: any) => {
   const header = await getHeaderInfo()

   try {
      const resp = await axios.patch(url, body, header)

      return handleResponse(resp)
   } catch (err: any) {
      throw handleResponse(err.response)
   }
}

export const deleteApi = async (url: any) => {
   const header = await getHeaderInfo()

   try {
      const resp = await axios.delete(url, header)

      return handleResponse(resp)
   } catch (err: any) {
      throw handleResponse(err.response)
   }
}

export const postImage = async (url: string, body: any) => {
   const header = await getFormDataHeader()
   const formData = new FormData()
   formData.append('file', body)
   try {
      const resp = await axios.put(url, formData, header)
      return handleResponse(resp)
   } catch (err: any) {
      throw handleResponse(err.response)
   }
}
