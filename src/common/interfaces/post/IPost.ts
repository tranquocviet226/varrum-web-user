import { IAuthor } from '../author/IAuthor'
import { ICategory } from '../category/ICategory'
import { IPhoto } from '../photo/IPhoto'

export interface IPost {
  id: string
  title: string
  content: string
  description: string
  date: string
  views: number
  likes: number
  userLike: boolean
  commentCount: number
  hash_tag: string
  photo: IPhoto
  categories: ICategory[]
  author: IAuthor
  createdAt: Date
  updatedAt: Date
  errorType: string
  message: string[]
  timestamp: string
}
