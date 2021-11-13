import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { IPost } from '../../../common/interfaces/post/IPost'
import Title from '../../../components/title/Title'
import { actionShowForum } from '../../../redux/actions/forums/forumAction'
import { AppState } from '../../../redux/reducers/rootReducer'
import NewItem from '../home/components/forum/components/NewItem'
import ForumsItemDetail from './components/ForumItemDetail'

const ForumDetail = () => {
  const state = useSelector((state: AppState) => state)
  const newForums = state.forums.newForums
  const [forum, setForum] = useState<IPost>()
  const { id } = useParams<any>()

  useEffect(() => {
    const showPost = async () => {
      const response = await actionShowForum(id)
      if (!response.errorType) setForum(response)
    }
    showPost()
  }, [id])

  return (
    <div>
      {forum && (
        <div className='homepage__container mb-2'>
          <div className='homepage__body'>
            <div className='forum__container'>
              <ForumsItemDetail item={forum} />
            </div>
          </div>
          <div className='homepage__section'>
            <Title title='Bài viết mới' />
            <div className='forum__post__container'>
              {newForums &&
                newForums.content.map((item) => (
                  <NewItem key={item.id} item={item} />
                ))}
              {/* <Ads1 urlName={bannerImgName[2]} style={{ height: 180 }} /> */}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ForumDetail
