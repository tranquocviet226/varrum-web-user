export interface ICreatePost {
  title: string
  description?: string
  content: string
  date: string
  hash_tag?: string
  photo_id: string
  categories_id: string[]
}
