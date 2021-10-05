import { IParamsPaginate } from '../../../common/interfaces/IParamsPaginate'
import { CategoryApi } from '../../../network/api/category/categoryApi'
import { configResponse } from '../../../network/responsive'

export const actionGetListCategory = async (params?: IParamsPaginate) => {
  const response = await CategoryApi.getListCategory(params)
  const data = configResponse(response)

  if (data) return data
}
