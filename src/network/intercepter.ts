import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { URL } from '../common/constants/constants'

const DEFAULT_API_CONFIG: AxiosRequestConfig = {
  baseURL: URL,
  timeout: 30000
}

const instance = axios.create({
  ...DEFAULT_API_CONFIG
})

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  return config
})

instance.interceptors.response.use(
  (response) => {
    if (response) return response
  },
  (error: AxiosError) => {
    if (error.response) {
      throw error.response
    }
    if (error.message && error.message === 'Network Error') {
      throw error
    }
    if (error.request) {
      throw error.response
    }
    throw error
  }
)

export default instance
