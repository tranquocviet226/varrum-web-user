import { EPaginateActions } from './EPaginateActions'

export const actionPaginate = (type: EPaginateActions, page: number) => {
  return {
    type,
    page
  }
}
