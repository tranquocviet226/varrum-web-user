import { ESearchActions } from './ESearchActions'

export const setKeyword = (keyword: string) => {
  return {
    type: ESearchActions.SET_KEYWORD,
    keyword
  }
}

export const removeKeyword = (index: number) => {
  return {
    type: ESearchActions.REMOVE_KEYWORD,
    index
  }
}
