import { ICategory } from '../../common/interfaces/category/ICategory'

type Props = {
  item: ICategory
}

const CategoryCard = ({ item }: Props) => {
  return (
    <div
      className='category__card__container'
      style={{ backgroundColor: item.color }}
    >
      <span>{item.name}</span>
    </div>
  )
}

export default CategoryCard
