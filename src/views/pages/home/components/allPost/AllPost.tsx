import { IPost } from '../../../../../common/interfaces/post/IPost'
import AllPostCard from '../../../../../components/allPostCard/AllPostCard'
import Title from '../../../../../components/title/Title'

interface Props {
  posts: IPost[]
}

const AllPost = ({ posts }: Props) => {
  return (
    <div>
      <Title title='Bài viết mới nhất' />
      <div style={{ marginTop: 16 }}></div>
      {posts.map((post) => (
        <AllPostCard post={post} key={post.id} />
      ))}
    </div>
  )
}

export default AllPost
