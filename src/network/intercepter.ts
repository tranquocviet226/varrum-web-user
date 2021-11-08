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
    if (error.response || error.request) {
      throw error.response
    }
    if (error.message && error.message === 'Network Error') {
      throw error
    }
    throw error
  }
)

export default instance
