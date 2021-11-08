import instance from '../../intercepter'
import { ILogin } from '../../../common/interfaces/user/ILogin'
import { IRegister } from '../../../common/interfaces/user/IRegister'
import { IFbRegister } from '../../../common/interfaces/user/IFbRegister'
import { IFbLogin } from '../../../common/interfaces/user/IFbLogin'

class UserApis {
  login = (params: ILogin) => instance.post('auth/login', params)
  register = (params: IRegister) => instance.post('users', params)
  fbRegister = (params: IFbRegister) =>
    instance.post('users/fb-register', params)
  fbLogin = (params: IFbLogin) => instance.post('auth/fb-login', params)
}

export const UserApi = new UserApis()
