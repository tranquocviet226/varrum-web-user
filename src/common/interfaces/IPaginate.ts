import { IPost } from './post/IPost'

export interface IPaginate {
  content: IPost[]
  currentPage: number
  hasNext: boolean
  payloadSize: number
  skippedRecords: number
  totalPages: number
  totalRecords: number
}
