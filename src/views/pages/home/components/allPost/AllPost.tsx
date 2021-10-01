import AllPostCard from '../../../../../components/allPostCard/AllPostCard'
import Title from '../../../../../components/title/Title'

const AllPost = () => {
  return (
    <div>
      <Title title='Bài viết mới nhất' />
      <div style={{ marginTop: 16 }}></div>
      <AllPostCard />
      <AllPostCard />
      <AllPostCard />
      <AllPostCard />
    </div>
  )
}

export default AllPost
