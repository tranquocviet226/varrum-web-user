import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { ICategory } from '../../../../../common/interfaces/category/ICategory'
import { getPhotoUrl } from '../../../../../common/untils/functons'
import { routes } from '../../../../../common/untils/general'
import { convertToSlug, vnDate } from '../../../../../common/untils/helpers'
import Title from '../../../../../components/title/Title'
import { AppState } from '../../../../../redux/reducers/rootReducer'

interface CategoryProps {
  category: ICategory
}

const ForumCard = ({ category }: CategoryProps) => {
  const history = useHistory()
  const handleGoForumsCategory = () => {
    history.push({
      pathname: `${routes.forums}/${convertToSlug(category.name)}`,
      state: category.id
    })
  }
  return (
    <div className='forum__card__container'>
      <div className='forum__card__content__container'>
        <img
          src={getPhotoUrl(category.photo.name)}
          className='forum__card__img'
          alt=''
        />
        <div>
          <h5 onClick={handleGoForumsCategory} className='forum__card__title'>
            {category.name}
          </h5>
          <p className='forum__card__description'>{category.description}</p>
        </div>
      </div>
      <div className='forum__card__right'>
        <div className='forum__card__right__topic'>
          <div>
            <p className='forum__card__right__title'> Bài viết </p>
            <p className='forum__card__right__txt'>{category.forumsCount}</p>
          </div>
          <div>
            <p className='forum__card__right__title'>Lượt thích</p>
            <p className='forum__card__right__txt'>
              {category.forum.likes * 13}
            </p>
          </div>
          <div>
            <p className='forum__card__right__title'>Hoạt động</p>
            <p className='forum__card__right__txt'>
              {vnDate(category?.forum?.createdAt)}
            </p>
          </div>
        </div>
        <div className='forum__card__right__post'>
          <p className='forum__card__right__post__txt'>Bài viết mới nhất</p>
          <p className='forum__card__right__post__title'>
            <i className='bx bxs-user-circle forum__card__right__post__icon'></i>
            {category.forum?.title || 'Chưa có bài viết nào'}
          </p>
        </div>
      </div>
    </div>
  )
}

const Forum = () => {
  const state = useSelector((state: AppState) => state)
  const forumsCategories = state.categoriesReducer.forumsCategories

  return (
    <div className='forum__container'>
      <div className='forum__title'>
        <Title title={'Forums'} />
      </div>
      {forumsCategories &&
        forumsCategories.map((category) => (
          <ForumCard key={category.id} category={category} />
        ))}
    </div>
  )
}

export default Forum
