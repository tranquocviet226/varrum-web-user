import { Link } from 'react-router-dom'
import { IPost } from '../../../../../common/interfaces/post/IPost'
import { getPhotoUrl } from '../../../../../common/untils/functons'
import { linkToPosts } from '../../../../../common/untils/general'
import AuthorDateViews from '../../../../../components/authoDateViews/AuthorDateViews'
import Carousel from '../../../../../components/carousel/Carousel'

interface Props {
  posts: IPost[]
}

const TrendingSlider = ({ posts }: Props) => {
  return (
    <div style={{ marginLeft: -8, marginRight: -8, marginTop: 8 }}>
      <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <Carousel show={3}>
          {posts.map((item) => (
            <div key={item.id} className='trending'>
              <div className='trending__slider__container'>
                <div className='animation__image__container'>
                  <Link to={linkToPosts(item.id)}>
                    <img
                      src={getPhotoUrl(item.photo.name)}
                      alt='placeholder'
                      className='trending__slider__image'
                      style={{ cursor: 'pointer' }}
                    />
                  </Link>
                </div>
                <div className='trending__slider__title__container'>
                  <Link to={linkToPosts(item.id)}>
                    <p className='trending__slider__title'>{item.title}</p>
                  </Link>
                  <AuthorDateViews
                    author={item.author.fullname}
                    date={item.date}
                    views={item.views}
                  />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default TrendingSlider
