import { IPost } from '../../common/interfaces/post/IPost'
import { getPhotoUrl } from '../../common/untils/functons'
import AuthorDateViews from '../authoDateViews/AuthorDateViews'
import CategoryCard from '../categoryCard/CategoryCard'
import { Link } from 'react-router-dom'

interface Props {
  post: IPost
}

const NewsCard = ({ post }: Props) => {
  return (
    <div className='news__card__container'>
      <div className='news__card__image__container'>
        <Link to={post.id}>
          <img
            className='news__card__image__background'
            src={getPhotoUrl(post.photo.name)}
            alt=''
          ></img>
        </Link>
      </div>
      <div className='news__card__overlay'>
        <div className='news__card__category'>
          {post.categories.slice(0, 2).map((item) => (
            <CategoryCard key={item.id} item={item} />
          ))}
        </div>
        <Link to={post.id}>
          <span className='news__card__overlay__title'>{post.title}</span>
        </Link>
        <AuthorDateViews
          author={post.author.fullname}
          date={post.date}
          views={post.views}
        />
      </div>
    </div>
  )
}

export default NewsCard
