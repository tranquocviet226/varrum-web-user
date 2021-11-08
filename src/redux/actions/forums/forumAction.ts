import { Dispatch } from 'redux'
import { ICommenRequest } from '../../../common/interfaces/forums/ICommentRequest'
import { ICreateForum } from '../../../common/interfaces/forums/ICreateForums'
import { IUpdateForum } from '../../../common/interfaces/forums/IUpdateForum'
import { IPaginate } from '../../../common/interfaces/IPaginate'
import { IParamsPaginate } from '../../../common/interfaces/IParamsPaginate'
import { ForumsApi } from '../../../network/api/forums/forumsApi'
import { configResponse } from '../../../network/responsive'
import { EForumActions } from './EForumActions'

export const setForums = (type: EForumActions, data: IPaginate) => {
  return {
    type,
    data
  }
}

export const actionFetchForums = (
  type: EForumActions,
  params?: IParamsPaginate
) => {
  return async (dispatch: Dispatch) => {
    const response = await ForumsApi.getList(params)
    const data = configResponse(response)
    if (!data.errorType) return dispatch(setForums(type, data))
  }
}

export const actionShowForum = async (id: string) => {
  const response = await ForumsApi.show(id)
  const data = configResponse(response)
  return data
}

export const actionCreateForum = async (post: ICreateForum) => {
  const response = await ForumsApi.createForum(post)
  const data = configResponse(response)
  return data
}

export const actionUpdateForum = async (post: IUpdateForum) => {
  const response = await ForumsApi.updateForum(post)
  const data = configResponse(response)
  return data
}

export const actionGetCommentForum = async (
  forumId: string,
  params?: IParamsPaginate
) => {
  const response = await ForumsApi.getComments(forumId, params)
  const data = configResponse(response)
  return data
}

export const actionComment = async (request: ICommenRequest) => {
  const response = await ForumsApi.comment(request)
  const data = configResponse(response)
  return data
}

export const actionDeleteForum = async (id: string) => {
  const response = await ForumsApi.deleteForum(id)
  const data = configResponse(response)
  if (data) return data
}
