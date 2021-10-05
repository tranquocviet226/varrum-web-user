import { UploadApi } from '../../../network/api/upload/uploadApi'
import { configResponse } from '../../../network/responsive'

export const actionUploadPhoto = async (file: File) => {
  const response = await UploadApi.upload(file)
  const data = configResponse(response)
  return data
}
