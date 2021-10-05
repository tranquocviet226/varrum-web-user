import { IPost } from '../../../../../common/interfaces/post/IPost'
import Title from '../../../../../components/title/Title'
import TrendingSlider from '../slider/TrendingSlider'

interface Props {
  posts: IPost[]
}

const Trending = ({ posts }: Props) => {
  return (
    <div>
      <div className='trending__title__container'>
        <Title title='Top trending' />
        <div className='trending__view__all'>
          <span>Xem thêm</span>
        </div>
      </div>
      <TrendingSlider posts={posts} />
    </div>
  )
}

export default Trending
