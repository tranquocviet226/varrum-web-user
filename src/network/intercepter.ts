import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { URL } from '../common/constants/constants'
import { ErrorTypes } from '../common/enums/errorTypes'

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
        if (
            response?.data?.errorType === ErrorTypes.ACCESS_TOKEN_EXPIRED ||
            response?.data?.errorType === ErrorTypes.UNAUTHORIZED
        )
            logout()
        return response
    },
    (error: AxiosError) => {
        if (
            error.response?.data?.errorType === ErrorTypes.ACCESS_TOKEN_EXPIRED ||
            error.response?.data?.errorType === ErrorTypes.UNAUTHORIZED
        )
            return logout()
        if (error.response) {
            throw error.response
        }
        if (error.message && error.message === 'Network Error') {

        }
        if (error.request) {

        }
        throw error
    }
)

const logout = () => {
    // handle logout
    //   store.dispatch(LogoutAction())
    //   localStorage.removeItem(PERSIST_ROOT)
    window.location.replace('/')
}

export default instance