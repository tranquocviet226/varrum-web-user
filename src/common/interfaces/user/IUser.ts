import { IRole } from '../role/IRole'

export interface IUser {
  id: string
  email: string
  fullname: string
  avatar: IAvatar
  status: boolean
  roles: IRole[]
  fbAvatar: string
}

export interface IAvatar {
  id: string
  name: string
}
