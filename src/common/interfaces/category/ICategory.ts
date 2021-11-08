import { IPhoto } from '../photo/IPhoto'
import { IPost } from '../post/IPost'

export interface ICategory {
  id: string
  name: string
  description: string
  forumsCount?: number
  forum?: IPost
  color: string
  photo: IPhoto
  status: boolean
}
