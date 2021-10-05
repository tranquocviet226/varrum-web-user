import { Dispatch } from 'redux'
import { IParamsPaginate } from '../../../common/interfaces/IParamsPaginate'
import { ICreatePost } from '../../../common/interfaces/post/ICreatePost'
import { IPost } from '../../../common/interfaces/post/IPost'
import { parseError } from '../../../common/untils/functons'
import { PostApi } from '../../../network/api/post/postApi'
import { configResponse } from '../../../network/responsive'
import { actionSetNotification } from '../notification/notificationAction'
import { EPostActions } from './EPostActions'

export const fetchPosts = (type: EPostActions, posts: IPost[]) => {
  return {
    type,
    posts
  }
}

export const actionFetchPosts = (
  type: EPostActions,
  params?: IParamsPaginate
) => {
  return async (dispatch: Dispatch) => {
    const response = await PostApi.getListPost(params)
    const data = configResponse(response)
    if (data) return dispatch(fetchPosts(type, data?.content))
  }
}

export const actionShowPost = async (id: string) => {
  const response = await PostApi.showListPost(id)
  const data = configResponse(response)
  if (data) return data
}

export const actionCreatePost = async (post: ICreatePost) => {
  const response = await PostApi.createPost(post)
  const data = configResponse(response)
  return data
}
