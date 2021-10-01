type Props = {
  item: any
}

const CategoryCard = ({ item }: Props) => {
  return (
    <div
      className='category__card__container'
      style={{ backgroundColor: item.color }}
    >
      <span>{item.title}</span>
    </div>
  )
}

export default CategoryCard
