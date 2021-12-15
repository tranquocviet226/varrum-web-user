import { Link } from 'react-router-dom'
import { IPost } from '../../../../../common/interfaces/post/IPost'
import { getPhotoUrl } from '../../../../../common/untils/functons'
import { linkToPosts } from '../../../../../common/untils/general'
import AuthorDateViews from '../../../../../components/authoDateViews/AuthorDateViews'
import CategoryCard from '../../../../../components/categoryCard/CategoryCard'
import { useHistory } from 'react-router'
interface Props {
  post: IPost
}

const Banner = ({ post }: Props) => {
  const history = useHistory()
  const link = linkToPosts(post.id)
  return (
    <div className='banner__container'>
      <Link to={link}>
        <img
          className='banner__image__background'
          src={getPhotoUrl(post.photo.name)}
          alt=''
        ></img>
      </Link>
      <div
        onClick={() => history.push(linkToPosts(post.id))}
        className='banner__overlay'
      >
        <div className='banner__overlay__container'>
          <div style={{ display: 'flex' }}>
            {post.categories.map((item) => (
              <CategoryCard key={item.id} item={item} />
            ))}
          </div>
          <Link to={link}>
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
