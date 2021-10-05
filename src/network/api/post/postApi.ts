import { IParamsPaginate } from '../../../common/interfaces/IParamsPaginate'
import { ICreatePost } from '../../../common/interfaces/post/ICreatePost'
import instance from '../../intercepter'

class PostApis {
  getListPost = (params?: IParamsPaginate) =>
    instance.get('posts', {
      params: params
    })
  showListPost = (id: string) => instance.get(`posts/${id}`)
  createPost = (post: ICreatePost) => instance.post('posts', post)
}

export const PostApi = new PostApis()
