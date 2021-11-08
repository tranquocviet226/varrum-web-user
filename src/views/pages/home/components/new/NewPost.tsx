import { bannerImgName } from '../../../../../common/constants/constants'
import { IPost } from '../../../../../common/interfaces/post/IPost'
import NewsCard from '../../../../../components/newsCard/NewsCard'
import Title from '../../../../../components/title/Title'
import Ads1 from '../ads/Ads1'

type Props = {
  title?: string
  posts: IPost[]
}

const NewPost = ({ title, posts }: Props) => {
  return (
    <>
      <div className='new__post__title'>
        <Title title={title} />
      </div>
      {posts.map((post) => (
        <NewsCard post={post} key={post.id} />
      ))}
      <Ads1 urlName={bannerImgName[2]} />
    </>
  )
}

export default NewPost
