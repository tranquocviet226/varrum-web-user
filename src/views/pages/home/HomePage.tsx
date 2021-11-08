import moment from 'moment'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { bannerImgName } from '../../../common/constants/constants'
import { routes } from '../../../common/untils/general'
import VButton from '../../../components/button/VButton'
import Title from '../../../components/title/Title'
import { EPostActions } from '../../../redux/actions/post/EPostActions'
import { actionFetchPosts } from '../../../redux/actions/post/postAction'
import { AppState } from '../../../redux/reducers/rootReducer'
import Ads1 from './components/ads/Ads1'
import AllPost from './components/allPost/AllPost'
import Banner from './components/banner/Banner'
import NewItem from './components/forum/components/NewItem'
import Forum from './components/forum/Forum'
import NewPost from './components/new/NewPost'
import RandomPost from './components/random/RandomPost'
import Trending from './components/trending/Trending'

const HomePage = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const state = useSelector((state: AppState) => state)
  const newForums = state.forums.newForums
  const newPosts = state.posts.newPosts.content
  const trendingPosts = state.posts.trendingPosts.content
  const randomPosts = state.posts.randomPosts.content

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
      limit: 17,
      orderBy: 'posts.createdAt',
      orderDirection: 'DESC'
    }
    dispatch(actionFetchPosts(EPostActions.FETCH_NEW_POSTS, params))
  }, [dispatch])

  const onSeeMore = () => {
    history.push(routes.all)
  }

  const renderForums = () => {
    return (
      <div className='homepage__container mb-2'>
        <div className='homepage__body'>
          <Forum />
          <Ads1 urlName={bannerImgName[0]} style={{ height: 180 }} />
        </div>
        <div className='homepage__section'>
          <Title title='Bài viết mới' />
          <div className='forum__post__container'>
            {newForums &&
              newForums.content.map((item) => (
                <NewItem key={item.id} item={item} />
              ))}
            <Ads1 urlName={bannerImgName[2]} style={{ height: 180 }} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className='homepage__container'>
        <div className='homepage__body'>
          {newPosts.length > 0 ? <Banner post={newPosts[0]} /> : null}
          {trendingPosts.length > 0 ? <Trending posts={trendingPosts} /> : null}
          <Ads1 urlName={bannerImgName[0]} style={{ height: 170 }} />
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
            <>
              <AllPost posts={newPosts.slice(12)} />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: 16
                }}
              >
                <VButton
                  onClick={onSeeMore}
                  title='Xem thêm'
                  className='vbutton__all__post'
                />
              </div>
            </>
          ) : null}
        </div>
        <div className='homepage__section'>
          {newPosts.length >= 10 ? (
            <NewPost title='Mới nhất' posts={newPosts.slice(6, 12)} />
          ) : null}
        </div>
      </div>
      <Ads1 urlName={bannerImgName[1]} style={{ height: 180 }} />
      {renderForums()}
    </div>
  )
}

export default HomePage
