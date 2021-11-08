import { IUser } from '../user/IUser'

export interface IComment {
  id: string
  content?: string
  parentId?: IComment
  childrenComment?: IComment[]
  createdAt?: Date
  updatedAt?: Date
  user?: IUser
}
