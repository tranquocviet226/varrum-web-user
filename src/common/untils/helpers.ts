import moment from 'moment'
import { AvatarDefault } from '../../assets/images'
import instance from '../../network/intercepter'
import { IUser } from '../interfaces/user/IUser'
import { getPhotoUrl } from './functons'

const getAvatar = (users: any) => {
  const avaName = users?.auth?.user?.avatar?.name
  const fbAva = users?.auth?.user?.fbAvatar
  const result = avaName ? getPhotoUrl(avaName) : fbAva ? fbAva : AvatarDefault
  return result
}

const getUserAvatar = (user: IUser) => {
  const avaName = user?.avatar?.name
  const fbAva = user?.fbAvatar
  const result = avaName ? getPhotoUrl(avaName) : fbAva ? fbAva : AvatarDefault
  return result
}

const getUserValue = (users: any, value: string) => {
  const avaName = users?.auth?.user[value]
  const result = avaName ? avaName : ''
  return result
}

const setToken = (token: string) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

const vnDate = (date: Date | string) => {
  return moment(date).fromNow()
}

const convertDate = (date: Date | string) => {
  return moment(date).format('DD-MM-YYYY')
}

const convertToSlug = (str: string) => {
  str = str.toLowerCase()
  str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  str = str.replace(/[đĐ]/g, 'd')
  str = str.replace(/([^0-9a-z-\s])/g, '')
  str = str.replace(/(\s+)/g, '-')
  str = str.replace(/-+/g, '-')
  str = str.replace(/^-+|-+$/g, '')
  return str
}
export {
  getAvatar,
  getUserValue,
  setToken,
  vnDate,
  convertToSlug,
  getUserAvatar,
  convertDate
}
