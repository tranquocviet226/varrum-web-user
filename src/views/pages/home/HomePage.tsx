import moment from 'moment'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import VButton from '../../../components/button/VButton'
import { EPostActions } from '../../../redux/actions/post/EPostActions'
import { actionFetchPosts } from '../../../redux/actions/post/postAction'
import { AppState } from '../../../redux/reducers/rootReducer'
import Ads1 from './components/ads/Ads1'
import AllPost from './components/allPost/AllPost'
import Banner from './components/banner/Banner'
import NewPost from './components/new/NewPost'
import RandomPost from './components/random/RandomPost'
import Trending from './components/trending/Trending'

const HomePage = () => {
  const dispatch = useDispatch()
  const postState = useSelector((state: AppState) => state.posts)
  const newPosts = postState.newPosts
  const trendingPosts = postState.trendingPosts
  const randomPosts = postState.randomPosts

  useEffect(() => {
    const last7Days = moment().subtract(7, 'days').format()
    const params = {
      page: 1,
      limit: 9,
      condition: `posts.created_at > "${last7Days}"`,
      orderBy: 'posts.views',
      orderDirection: 'DESC'
    }
    dispatch(actionFetchPosts(EPostActions.FETCH_TOP_TRENDING, params))
  }, [dispatch])

  useEffect(() => {
    const params = {
      page: 1,
      limit: 9,
      random: true
    }
    dispatch(actionFetchPosts(EPostActions.FETCH_RANDOM_POSTS, params))
  }, [dispatch])

  return (
    <div>
      <div className='homepage__container'>
        <div className='homepage__body'>
          {newPosts.length > 0 ? <Banner post={newPosts[0]} /> : null}
          {trendingPosts.length > 0 ? <Trending posts={trendingPosts} /> : null}
          <Ads1 />
        </div>
        <div className='homepage__section'>
          {newPosts.length > 6 ? (
            <NewPost title='Mới nhất' posts={newPosts.slice(1, 6)} />
          ) : null}
        </div>
      </div>
      <div className='random__post__container'>
        {randomPosts.length > 0 ? <RandomPost posts={randomPosts} /> : null}
      </div>
      <div className='homepage__container'>
        <div className='homepage__body'>
          {newPosts.length > 11 ? (
            <AllPost posts={newPosts.slice(11, 15)} />
          ) : null}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <VButton title='Xem thêm' className='vbutton__all__post' />
          </div>
        </div>
        <div className='homepage__section'>
          {newPosts.length >= 10 ? (
            <NewPost title='Mới nhất' posts={newPosts.slice(6, 11)} />
          ) : null}
        </div>
      </div>
      <Ads1 />
    </div>
  )
}

export default HomePage
