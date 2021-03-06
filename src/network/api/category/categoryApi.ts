import { IParamsPaginate } from '../../../common/interfaces/IParamsPaginate'
import instance from '../../intercepter'

class CategoryApis {
  getListCategory = (params?: IParamsPaginate) =>
    instance.get('categories', {
      params: params
    })
  getForumsCategory = (params?: IParamsPaginate) =>
    instance.get('forums-categories', {
      params: params
    })
}

export const CategoryApi = new CategoryApis()
