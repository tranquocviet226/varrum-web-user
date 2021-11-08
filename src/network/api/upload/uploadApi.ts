import axios from 'axios'
import { URL } from '../../../common/constants/constants'
import { ErrorTypes } from '../../../common/enums/errorTypes'
import { getToken, logout } from '../../../common/untils/functons'

class UploadApis {
  upload = async (file: File) => {
    const data = new FormData()
    data.append('file', file)

    const token = getToken()
    return axios({
      method: 'POST',
      url: URL.concat('/upload'),
      data: data,
      headers: { Authorization: 'Bearer ' + token }
    })
      .then((response) => {
        if (
          response.data?.errorType === ErrorTypes.ACCESS_TOKEN_EXPIRED ||
          response.data?.errorType === ErrorTypes.UNAUTHORIZED
        ) {
          //logout
          logout()
        }
        return response
      })
      .catch((error) => {
        return error?.response
      })
  }
}

export const UploadApi = new UploadApis()
