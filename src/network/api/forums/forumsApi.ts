import { ICommenRequest } from '../../../common/interfaces/forums/ICommentRequest'
import { ICreateForum } from '../../../common/interfaces/forums/ICreateForums'
import { IUpdateForum } from '../../../common/interfaces/forums/IUpdateForum'
import { IParamsPaginate } from '../../../common/interfaces/IParamsPaginate'
import instance from '../../intercepter'

class ForumsApis {
  getList = (params?: IParamsPaginate) =>
    instance.get('forums', {
      params: params
    })
  show = (id: string) => instance.get(`forums/${id}`)
  createForum = (post: ICreateForum) => instance.post('forums', post)
  updateForum = (post: IUpdateForum) => instance.patch('forums', post)
  deleteForum = (id: string) => instance.delete('forums', { data: { id } })
  getComments = (forumId: string, params?: IParamsPaginate) =>
    instance.get(`comments/${forumId}`, {
      params: params
    })
  comment = (request: ICommenRequest) => instance.post('comments', request)
}

export const ForumsApi = new ForumsApis()
