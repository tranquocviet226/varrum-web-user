import { Dispatch } from 'redux'
import { IPaginate } from '../../../common/interfaces/IPaginate'
import { IParamsPaginate } from '../../../common/interfaces/IParamsPaginate'
import { ICreatePost } from '../../../common/interfaces/post/ICreatePost'
import { IPost } from '../../../common/interfaces/post/IPost'
import { IUpdatePost } from '../../../common/interfaces/post/IUpdatePost'
import { PostApi } from '../../../network/api/post/postApi'
import { configResponse } from '../../../network/responsive'
import { EPostActions } from './EPostActions'

export const fetchPosts = (type: EPostActions, data: IPaginate) => {
  return {
    type,
    data
  }
}

export const actionFetchPosts = (
  type: EPostActions,
  params?: IParamsPaginate
) => {
  return async (dispatch: Dispatch) => {
    const response = await PostApi.getListPost(params)
    const data = configResponse(response)
    if (!data.errorType) return dispatch(fetchPosts(type, data))
  }
}

export const actionShowPost = async (id: string): Promise<IPost> => {
  const response = await PostApi.showListPost(id)
  const data = configResponse(response)
  if (data) return data
}

export const actionCreatePost = async (post: ICreatePost) => {
  const response = await PostApi.createPost(post)
  const data = configResponse(response)
  return data
}

export const actionUpdatePost = async (post: IUpdatePost) => {
  const response = await PostApi.updatePost(post)
  const data = configResponse(response)
  return data
}

export const actionDeletePost = async (id: string) => {
  const response = await PostApi.deletePost(id)
  const data = configResponse(response)
  if (data) return data
}
