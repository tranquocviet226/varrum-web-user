import { AxiosResponse } from 'axios'

export const configResponse = (res: AxiosResponse) => {
  if (res.status >= 200 && res.status < 300 && res?.data?.payload) {
    return res?.data?.payload
  }
  return res?.data
}
