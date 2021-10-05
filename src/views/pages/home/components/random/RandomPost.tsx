import { IPost } from '../../../../../common/interfaces/post/IPost'
import Title from '../../../../../components/title/Title'
import RandomSlider from '../slider/RandomSlider'

interface Props {
  posts: IPost[]
}

const RandomPost = ({ posts }: Props) => {
  return (
    <div>
      <div className='trending__title__container'>
        <Title title='Nổi bật' />
        <div className='trending__view__all'>
          <span>Xem thêm</span>
        </div>
      </div>
      <RandomSlider posts={posts} />
    </div>
  )
}

export default RandomPost
