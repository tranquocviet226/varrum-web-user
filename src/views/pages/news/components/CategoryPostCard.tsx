import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload'
import { IPost } from '../../../../common/interfaces/post/IPost'
import { getPhotoUrl } from '../../../../common/untils/functons'
import AuthorDateViews from '../../../../components/authoDateViews/AuthorDateViews'
import CategoryCard from '../../../../components/categoryCard/CategoryCard'

interface Props {
  post: IPost
  route: string
}

const CategoryPostCard = ({ post, route }: Props) => {
  const linkTo = `${route}/${post.id}`
  return (
    <div key={post.id} className='newspage__content__item'>
      <LazyLoad height={200} offset={[-100, 0]}>
        <div className='newpost__card__container'>
          <div className='newpost__card__image__container'>
            <Link to={linkTo}>
              <img
                className='newpost__card__image__background'
                src={getPhotoUrl(post.photo.name)}
                alt=''
              />
            </Link>
          </div>
          <div className='newpost__card__overlay'>
            <div className='newpost__card__category'>
              {post.categories.map((item) => (
                <CategoryCard key={item.id} item={item} />
              ))}
            </div>
            <Link to={linkTo}>
              <span className='newpost__card__overlay__title'>
                {post.title}
              </span>
            </Link>
            <div style={{ minHeight: 20 }}>
              <AuthorDateViews
                author={post.author.fullname}
                date={post.date}
                views={post.views}
              />
            </div>
            <span className='newpost__card__overlay__description'>
              {post.description}
            </span>
          </div>
        </div>
      </LazyLoad>
    </div>
  )
}

export default CategoryPostCard
