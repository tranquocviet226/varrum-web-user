import axios from 'axios'
import { URL } from '../../../common/constants/constants'
import { getToken } from '../../../common/untils/functons'

class UploadApis {
  upload = async (file: File) => {
    const data = new FormData()
    data.append('file', file)

    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZjMmU5OWU5LTkyMDEtNDg1Ny04Yzc5LWE4ZjE5NmExM2VjNCIsImVtYWlsIjoidHJhbnF1b2N2aWV0MjI2QGdtYWlsLmNvbSIsImlhdCI6MTYzMzI4MDUyMSwiZXhwIjoxNjMzMzY2OTIxfQ.NU3f1f_ak1G-gPt-m-W7DG4OoYgT9zC9wWqSTfk0eF8'

    return axios({
      method: 'POST',
      url: URL.concat('/upload'),
      data: data,
      headers: { Authorization: 'Bearer ' + token }
    })
      .then((response) => {
        return response
      })
      .catch((error) => {
        return error?.response
      })
  }
}

export const UploadApi = new UploadApis()
