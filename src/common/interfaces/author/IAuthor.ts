import { IPhoto } from '../photo/IPhoto'

export interface IAuthor {
  id: string
  email: string
  fullname: string
  avatar?: IPhoto
}
