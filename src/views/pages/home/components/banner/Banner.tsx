import { Link } from 'react-router-dom'
import { IPost } from '../../../../../common/interfaces/post/IPost'
import { getPhotoUrl } from '../../../../../common/untils/functons'
import AuthorDateViews from '../../../../../components/authoDateViews/AuthorDateViews'
import CategoryCard from '../../../../../components/categoryCard/CategoryCard'

interface Props {
  post: IPost
}

const Banner = ({ post }: Props) => {
  return (
    <div className='banner__container'>
      <Link to={post.id}>
        <img
          className='banner__image__background'
          src={getPhotoUrl(post.photo.name)}
          alt=''
        ></img>
      </Link>
      <div className='banner__overlay'>
        <div className='banner__overlay__container'>
          <div style={{ display: 'flex' }}>
            {post.categories.map((item) => (
              <CategoryCard key={item.id} item={item} />
            ))}
          </div>
          <Link to={post.id}>
            <div style={{ marginTop: 8 }}>
              <span className='banner__overlay__title'>{post.title}</span>
            </div>
          </Link>
          <AuthorDateViews
            author={post.author.fullname}
            date={post.date}
            views={post.views}
          />
        </div>
      </div>
    </div>
  )
}

export default Banner
