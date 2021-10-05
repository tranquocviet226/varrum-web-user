import { Link } from 'react-router-dom'
import { IPost } from '../../common/interfaces/post/IPost'
import { getPhotoUrl } from '../../common/untils/functons'
import AuthorDateViews from '../authoDateViews/AuthorDateViews'
import CategoryCard from '../categoryCard/CategoryCard'

interface Props {
  post: IPost
}

const AllPostCard = ({ post }: Props) => {
  return (
    <div className='all__card__container'>
      <div className='all__card__image__container'>
        <Link to={post.id}>
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
        <Link to={post.id}>
          <span className='all__card__overlay__title'>{post.title}</span>
        </Link>
        <AuthorDateViews
          author={post.author.fullname}
          date={post.date}
          views={post.views}
        />
        <span className='all__card__overlay__description'>
          {post.description}
        </span>
      </div>
    </div>
  )
}

export default AllPostCard
