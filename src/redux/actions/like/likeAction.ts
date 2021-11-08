import { Dispatch } from 'redux'
import { LikeApi } from '../../../network/api/like/likeApi'
import { configResponse } from '../../../network/responsive'
import { ELikeActions } from './ELikeActions'

export const actionLike = (forumId: string) => {
  return async (dispatch: Dispatch) => {
    await LikeApi.like(forumId)
    return dispatch({
      type: ELikeActions.LIKE,
      forumId
    })
  }
}

export const actionLikeDetail = async (forumId: string) => {
  const response = await LikeApi.like(forumId)
  const data = configResponse(response)
  if (data) return data
}
