import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bannerImgName } from '../../../common/constants/constants'
import { ECategory } from '../../../common/enums/ECategory'
import { IPost } from '../../../common/interfaces/post/IPost'
import { routes } from '../../../common/untils/general'
import NewsCard from '../../../components/newsCard/NewsCard'
import VPagination from '../../../components/pagination/VPagination'
import Title from '../../../components/title/Title'
import { EPaginateActions } from '../../../redux/actions/pagination/EPaginateActions'
import { actionPaginate } from '../../../redux/actions/pagination/paginateAction'
import { EPostActions } from '../../../redux/actions/post/EPostActions'
import { actionFetchPosts } from '../../../redux/actions/post/postAction'
import { AppState } from '../../../redux/reducers/rootReducer'
import Ads1 from '../home/components/ads/Ads1'
import NewPost from '../home/components/new/NewPost'
import CategoryPostCard from '../news/components/CategoryPostCard'

const HighlightsPage = () => {
  const dispatch = useDispatch()
  const postState = useSelector((state: AppState) => state)
  const posts = postState.posts.highlightsPosts.content
  const count = postState.posts.highlightsPosts.totalPages
  const page = postState.paginate.paginateHighlight
  const randomPosts = postState.posts.randomPosts.content

  useEffect(() => {
    const params = {
      page: page,
      limit: 20
    }
    dispatch(actionFetchPosts(EPostActions.FETCH_HIGHLIGHT_POST, params))
  }, [dispatch, page])

  const onPaginate = (page: number) => {
    dispatch(actionPaginate(EPaginateActions.PAGINATE_HIGHLIGHT, page))
  }

  return (
    <div>
      <div className='newspage__container'>
        <div className='newspage__body'>
          <Title title={ECategory.HIGHLIGHT} />
          {posts?.length > 0 ? (
            <div className='newspage__content'>
              {posts.map((post: IPost) => (
                <CategoryPostCard
                  key={post.id}
                  post={post}
                  route={routes.highlights}
                />
              ))}
            </div>
          ) : null}

          <div
            style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}
          >
            <VPagination
              defaultPage={page}
              count={count}
              onChange={(_event, page) => onPaginate(page)}
            />
          </div>
        </div>
        <div className='newspage__section'>
          {randomPosts?.length >= 0 ? (
            <>
              <NewPost
                title='Bài viết liên quan'
                posts={randomPosts.slice(0, 5)}
              />
              <div style={{ marginTop: 16 }}></div>
              {randomPosts.slice(5, 9).map((post) => (
                <NewsCard post={post} key={post.id} />
              ))}
              <Ads1 urlName={bannerImgName[2]} />
            </>
          ) : null}
        </div>
      </div>
      <Ads1 urlName={bannerImgName[1]} style={{ height: 180 }} />
    </div>
  )
}

export default HighlightsPage
