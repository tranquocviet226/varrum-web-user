import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bannerImgName } from '../../../common/constants/constants'
import { ECategory } from '../../../common/enums/ECategory'
import { IPost } from '../../../common/interfaces/post/IPost'
import VPagination from '../../../components/pagination/VPagination'
import Title from '../../../components/title/Title'
import { EPaginateActions } from '../../../redux/actions/pagination/EPaginateActions'
import { actionPaginate } from '../../../redux/actions/pagination/paginateAction'
import { EPostActions } from '../../../redux/actions/post/EPostActions'
import { actionFetchPosts } from '../../../redux/actions/post/postAction'
import { AppState } from '../../../redux/reducers/rootReducer'
import Ads1 from '../home/components/ads/Ads1'
import NewPost from '../home/components/new/NewPost'
import NewsPostCard from './components/CategoryPostCard'

const NewsPage = () => {
  const dispatch = useDispatch()
  const state = useSelector((state: AppState) => state)
  const newsPostsData = state.posts.newsPosts

  const newsPosts = state.posts.newsPosts.content
  const categories = state.categoriesReducer.categories
  const newsPostsRandom = state.posts.newsPostsRandom.content
  const page = state.paginate.paginateNews

  const newsCategory = categories.find(
    (category) => category?.name === ECategory.NEWS
  )

  useEffect(() => {
    const params = {
      page: page,
      limit: 20,
      condition: `categories.id = "${newsCategory?.id}"`,
      orderBy: 'posts.createdAt',
      orderDirection: 'DESC'
    }
    dispatch(actionFetchPosts(EPostActions.FETCH_NEWS_POSTS, params))
  }, [dispatch, page, newsCategory])

  const onPaginate = (page: number) => {
    dispatch(actionPaginate(EPaginateActions.PAGINATE_NEWS, page))
  }

  useEffect(() => {
    const params = {
      page: 1,
      limit: 5,
      condition: `categories.id = "${newsCategory?.id}"`,
      orderBy: 'posts.createdAt',
      orderDirection: 'DESC',
      random: true
    }
    dispatch(actionFetchPosts(EPostActions.FETCH_NEWS_POSTS_RANDOM, params))
  }, [dispatch, categories, newsCategory])

  return (
    <div>
      <div className='newspage__container'>
        <div className='newspage__body'>
          <Title title={ECategory.NEWS} />
          {newsPosts.length > 0 ? (
            <div className='newspage__content'>
              {newsPosts.map((post: IPost) => (
                <NewsPostCard key={post.id} post={post} route='news' />
              ))}
            </div>
          ) : null}
          <div
            style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}
          >
            <VPagination
              defaultPage={page}
              count={newsPostsData?.totalPages}
              onChange={(_event, val) => onPaginate(val)}
            />
          </div>
        </div>
        <div className='newspage__section'>
          {newsPostsRandom?.length >= 0 ? (
            <NewPost title='Bài viết liên quan' posts={newsPostsRandom} />
          ) : null}
        </div>
      </div>
      <Ads1 urlName={bannerImgName[1]} style={{ height: 180 }} />
    </div>
  )
}

export default NewsPage
