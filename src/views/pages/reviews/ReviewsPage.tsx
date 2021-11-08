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
import NewsPostCard from '../news/components/CategoryPostCard'

const ReviewsPage = () => {
  const dispatch = useDispatch()
  const postState = useSelector((state: AppState) => state)
  const reviewsPosts = postState.posts.reviewsPosts.content
  const count = postState.posts.reviewsPosts.totalPages
  const page = postState.paginate.paginateReviews
  const categories = postState.categoriesReducer.categories
  const reviewsPostsRandom = postState.posts.reviewsPostsRandom.content

  const newsCategory = categories.find(
    (category) => category?.name === ECategory.REVIEWS
  )

  useEffect(() => {
    const params = {
      page: page,
      limit: 20,
      condition: `categories.id = "${newsCategory?.id}"`,
      orderBy: 'posts.createdAt',
      orderDirection: 'DESC'
    }
    dispatch(actionFetchPosts(EPostActions.FETCH_REVIEWS_POSTS, params))
  }, [dispatch, page, newsCategory])

  const onPaginate = (page: number) => {
    dispatch(actionPaginate(EPaginateActions.PAGINATE_REVIEWS, page))
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
    dispatch(actionFetchPosts(EPostActions.RANDOM_REVIEWS_POSTS, params))
  }, [dispatch, newsCategory])

  return (
    <div>
      <div className='newspage__container'>
        <div className='newspage__body'>
          <Title title={ECategory.GAMES} />
          {reviewsPosts?.length > 0 ? (
            <div className='newspage__content'>
              {reviewsPosts.map((post: IPost) => (
                <NewsPostCard key={post.id} post={post} route='games' />
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
          {reviewsPostsRandom?.length >= 0 ? (
            <NewPost title='Bài viết liên quan' posts={reviewsPostsRandom} />
          ) : null}
        </div>
      </div>
      <Ads1 urlName={bannerImgName[1]} style={{ height: 180 }} />
    </div>
  )
}

export default ReviewsPage
