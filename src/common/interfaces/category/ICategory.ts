import { IPhoto } from '../photo/IPhoto'

export interface ICategory {
  id: string
  name: string
  color: string
  photo: IPhoto
  status: boolean
}
