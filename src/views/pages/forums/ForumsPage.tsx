import { Helmet } from 'react-helmet-async'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { ECategory } from '../../../common/enums/ECategory'
import { routes } from '../../../common/untils/general'
import { getAvatar } from '../../../common/untils/helpers'
import Title from '../../../components/title/Title'
import { AppState } from '../../../redux/reducers/rootReducer'
import NewItem from '../home/components/forum/components/NewItem'
import Forum from '../home/components/forum/Forum'

const ForumsPage = () => {
  const history = useHistory()
  const state = useSelector((state: AppState) => state)
  const users = state.users
  const newForums = state.forums.newForums

  const handleCreateForums = () => {
    history.push(routes.createForums)
  }

  return (
    <div>
      <Helmet>
        <title>{ECategory.VARUM + ' | ' + ECategory.FORUMS}</title>
      </Helmet>
      <div className='homepage__container mb-2'>
        <div className='homepage__body'>
          <Title title='Viết bài' />
          <div className='forum__create__container'>
            <img
              src={getAvatar(users)}
              className='forum__create__avatar'
              alt=''
            />
            <div
              onClick={handleCreateForums}
              className='forum__create__content'
            >
              {' '}
              Chia sẻ bài viết công khai
            </div>
          </div>
          <Forum />
          {/* <Ads1 urlName={bannerImgName[0]} style={{ height: 180 }} /> */}
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
    </div>
  )
}

export default ForumsPage
