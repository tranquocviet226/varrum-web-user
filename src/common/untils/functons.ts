import { actionLogout } from '../../redux/actions/user/userAction'
import { ROOT_STATE, store } from '../../redux/store/store'
import { URL } from '../constants/constants'
import { IRole } from '../interfaces/role/IRole'

const getPhotoUrl = (name: string) => {
  const url = URL.concat(`/upload/files/${name}`)
  return url
}

const getToken = () => {
  const localData = localStorage.getItem(`persist:${ROOT_STATE}`)
  if (localData) {
    let token = undefined
    const parseData = JSON.parse(localData)
    if (parseData) {
      const users = JSON.parse(parseData?.users)
      token = users?.auth?.token?.accessToken
    }
    return token
  }
}

const clearStore = () => {
  localStorage.removeItem(`persist:${ROOT_STATE}`)
}

const getTheme = () => {
  const theme = localStorage.getItem('theme')
  return theme
}

const parseError = (data: any) => {
  if (data.message && data.message.length > 0) {
    return data.message[0]
  } else if (data.message) {
    return data.message
  }

  return 'Ôi!, có lỗi rồi'
}

const logout = () => {
  // handle logout
  clearStore()
  store.dispatch(actionLogout())
  window.location.replace('/login')
}

const checkRole = (roleArray: IRole[], roleCheck: string) => {
  if (roleArray) {
    let check = false
    roleArray.forEach((role) => {
      if (role.name === roleCheck) {
        check = true
      }
    })
    return check
  }
  return false
}

const getRandomList = (list: any, length: number) => {
  const shuffled = list.sort(() => 0.5 - Math.random())
  return shuffled.slice(0, length)
}

const cleanObject = (obj: Object) => {
  for (const propName in obj) {
    if (
      obj[propName] === null ||
      obj[propName] === undefined ||
      obj[propName]?.length < 1
    ) {
      delete obj[propName]
    }
  }
  return obj
}

export {
  getPhotoUrl,
  getToken,
  parseError,
  getTheme,
  clearStore,
  logout,
  checkRole,
  getRandomList,
  cleanObject
}
