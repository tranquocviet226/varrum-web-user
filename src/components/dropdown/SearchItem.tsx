import { getPhotoUrl } from '../../common/untils/functons'

interface Props {
  title: string
  image?: string
  isDelete?: boolean
  onClickItem?: () => void
  onDelete?: () => void
}

const SearchItem = ({
  title,
  image,
  isDelete = true,
  onClickItem,
  onDelete
}: Props) => {
  return (
    <div className='search__item__container'>
      <div onClick={onClickItem} className='search__item__content'>
        <div className='search__item__img__container'>
          {isDelete ? (
            <i className='bx bx-time-five search__item__img'></i>
          ) : image ? (
            <img
              src={getPhotoUrl(image)}
              className='search__item__photo'
              alt=''
            />
          ) : (
            <i className='bx bx-search search__item__img'></i>
          )}
        </div>
        <p className='search__item__title'>{title}</p>
      </div>
      {isDelete ? (
        <div>
          <i onClick={onDelete} className='bx bx-x search__item__delete'></i>
        </div>
      ) : null}
    </div>
  )
}

export default SearchItem
