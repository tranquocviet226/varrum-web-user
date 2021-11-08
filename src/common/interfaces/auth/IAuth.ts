import { IRole } from '../role/IRole'
import { IUser } from '../user/IUser'
import { IToken } from './IToken'

export interface IAuth {
  access: IAccess
  token: IToken
  user: IUser
}

export interface IAccess {
  additionalPermissions: string[]
  roles: IRole[]
}
