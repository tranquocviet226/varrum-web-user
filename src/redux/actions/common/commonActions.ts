import { ECommonActions } from "./ECommonActions"

export const setLoading = (loading: boolean) => {
    return {
      type: ECommonActions.SET_LOADING,
      loading
    }
  }