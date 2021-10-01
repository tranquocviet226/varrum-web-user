import NewsCard from '../../../../../components/newsCard/NewsCard'
import Title from '../../../../../components/title/Title'
import Ads1 from '../ads/Ads1'

type Props = {
  title?: string
}

const NewPost = ({ title }: Props) => {
  return (
    <>
      <div className='new__post__title'>
        <Title title={title} />
      </div>
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <Ads1 />
    </>
  )
}

export default NewPost
