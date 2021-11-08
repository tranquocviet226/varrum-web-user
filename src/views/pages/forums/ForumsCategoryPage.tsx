import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { bannerImgName } from '../../../common/constants/constants'
import { routes } from '../../../common/untils/general'
import { convertToSlug } from '../../../common/untils/helpers'
import Title from '../../../components/title/Title'
import { EForumActions } from '../../../redux/actions/forums/EForumActions'
import { actionFetchForums } from '../../../redux/actions/forums/forumAction'
import { AppState } from '../../../redux/reducers/rootReducer'
import Ads1 from '../home/components/ads/Ads1'
import NewItem from '../home/components/forum/components/NewItem'
import ForumsItem from './components/ForumsItem'
import InfiniteScroll from 'react-infinite-scroll-component'

const ForumsCategoryPage = () => {
  const location = useLocation()
  const pathname = location.pathname
  const dispatch = useDispatch()
  const state = useSelector((state: AppState) => state)
  const forumsCategories = state.categoriesReducer.forumsCategories
  const forums = state.forums.forumsByCategory
  const newForums = state.forums.newForums
  const [page, setPage] = useState(1)

  const getIdFromPathname = (pathname: string) => {
    const result = forumsCategories.find(
      (item) => `${routes.forums}/${convertToSlug(item.name)}` === pathname
    )
    return result
  }

  const category = getIdFromPathname(pathname)

  useEffect(() => {
    if (category) {
      const params = {
        page: 1,
        limit: 20,
        condition: `category.id = "${category?.id}"`,
        orderBy: 'forums.createdAt',
        orderDirection: 'DESC'
      }
      dispatch(
        actionFetchForums(EForumActions.FETCH_FORUMS_BY_CATEGORY, params)
      )
    }
  }, [dispatch, category])

  const fetchMoreData = () => {
    const params = {
      page: page + 1,
      limit: 20,
      condition: `category.id = "${category?.id}"`,
      orderBy: 'forums.createdAt',
      orderDirection: 'DESC'
    }
    dispatch(
      actionFetchForums(EForumActions.FETCH_MORE_FORUMS_BY_CATEGORY, params)
    )
    setPage(page + 1)
  }

  return (
    <div>
      <div className='homepage__container mb-2'>
        <div className='homepage__body'>
          <div className='forum__container'>
            <div className='forum__title mb-2'>
              <Title title={'Forums'} />
            </div>
            {forums && (
              <InfiniteScroll
                dataLength={forums.content.length}
                next={fetchMoreData}
                hasMore={forums.hasNext}
                loader={<></>}
                endMessage={
                  <p style={{ textAlign: 'center' }}>
                    <b>
                      Yay! Luôn có nội dung mới cho bạn, hãy quay lại sau nhé!
                    </b>
                  </p>
                }
              >
                {forums.content.map((item) => (
                  <ForumsItem item={item} key={item.id} />
                ))}
              </InfiniteScroll>
            )}
          </div>
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
    </div>
  )
}

export default ForumsCategoryPage
