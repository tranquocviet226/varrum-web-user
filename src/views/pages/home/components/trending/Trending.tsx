import { useHistory } from 'react-router'
import { IPost } from '../../../../../common/interfaces/post/IPost'
import { routes } from '../../../../../common/untils/general'
import VButton from '../../../../../components/button/VButton'
import Title from '../../../../../components/title/Title'
import TrendingSlider from '../slider/TrendingSlider'

interface Props {
  posts: IPost[]
}

const Trending = ({ posts }: Props) => {
  const history = useHistory()

  const handleNavigateTrending = () => {
    history.push(routes.trendings)
  }

  return (
    <div>
      <div className='trending__title__container'>
        <Title title='Top trending' />
        <VButton
          onClick={handleNavigateTrending}
          title='Xem thêm'
          className='vbutton__trending'
        />
      </div>
      <TrendingSlider posts={posts} />
    </div>
  )
}

export default Trending
