import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload'
import { IPost } from '../../common/interfaces/post/IPost'
import { getPhotoUrl } from '../../common/untils/functons'
import { linkToPosts } from '../../common/untils/general'
import AuthorDateViews from '../authoDateViews/AuthorDateViews'
import CategoryCard from '../categoryCard/CategoryCard'

interface Props {
  post: IPost
}

const AllPostCard = ({ post }: Props) => {
  const link = linkToPosts(post.id)
  return (
    <LazyLoad height={200} offset={[-100, 0]}>
      <div className='all__card__container'>
        <div className='all__card__image__container'>
          <Link to={link}>
            <img
              className='all__card__image__background'
              src={getPhotoUrl(post.photo.name)}
              alt=''
            />
          </Link>
        </div>
        <div className='all__card__overlay'>
          <div className='all__card__category'>
            {post.categories.map((item) => (
              <CategoryCard key={item.id} item={item} />
            ))}
          </div>
          <Link to={link}>
            <span className='all__card__overlay__title'>{post.title}</span>
          </Link>
          <div style={{ minHeight: 20 }}>
            <AuthorDateViews
              author={post.author.fullname}
              date={post.date}
              views={post.views}
            />
          </div>
          <span className='all__card__overlay__description'>
            {post.description}
          </span>
        </div>
      </div>
    </LazyLoad>
  )
}

export default AllPostCard
