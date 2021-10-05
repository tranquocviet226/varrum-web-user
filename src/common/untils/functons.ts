import { URL } from '../constants/constants'

const getPhotoUrl = (name: string) => {
  const url = URL.concat(`/upload/files/${name}`)
  return url
}

const getToken = () => {
  const localData = localStorage.getItem('persist:root')
  if (localData) {
    const parseData = JSON.parse(localData)
    const auth = parseData?.auth
    const cookie = JSON.parse(auth)

    return cookie?.accessToken
  }
}

const parseError = (response: any) => {
  if (response.message && response.message.length > 0)
    return response.message[0]
  return 'Ôi!, có lỗi rồi'
}

export { getPhotoUrl, getToken, parseError }
