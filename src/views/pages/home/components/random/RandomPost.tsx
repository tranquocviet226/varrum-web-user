import { useHistory } from 'react-router'
import { IPost } from '../../../../../common/interfaces/post/IPost'
import { routes } from '../../../../../common/untils/general'
import VButton from '../../../../../components/button/VButton'
import Title from '../../../../../components/title/Title'
import RandomSlider from '../slider/RandomSlider'

interface Props {
  posts: IPost[]
}

const RandomPost = ({ posts }: Props) => {
  const history = useHistory()

  const handleNavigateHighlight = () => {
    history.push(routes.highlights)
  }

  return (
    <div>
      <div className='trending__title__container'>
        <Title title='Nổi bật' />
        <VButton
          onClick={handleNavigateHighlight}
          title='Xem thêm'
          className='vbutton__trending'
        />
      </div>
      <RandomSlider posts={posts} />
    </div>
  )
}

export default RandomPost
