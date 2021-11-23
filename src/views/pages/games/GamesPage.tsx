import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDispatch, useSelector } from 'react-redux'
import { ECategory } from '../../../common/enums/ECategory'
import { IPost } from '../../../common/interfaces/post/IPost'
import { routes } from '../../../common/untils/general'
import VPagination from '../../../components/pagination/VPagination'
import Title from '../../../components/title/Title'
import { EPaginateActions } from '../../../redux/actions/pagination/EPaginateActions'
import { actionPaginate } from '../../../redux/actions/pagination/paginateAction'
import { EPostActions } from '../../../redux/actions/post/EPostActions'
import { actionFetchPosts } from '../../../redux/actions/post/postAction'
import { AppState } from '../../../redux/reducers/rootReducer'
import NewPost from '../home/components/new/NewPost'
import CategoryPostCard from '../news/components/CategoryPostCard'

const GamesPage = () => {
  const dispatch = useDispatch()
  const postState = useSelector((state: AppState) => state)
  const gamesPosts = postState.posts.gamesPosts.content
  const count = postState.posts.gamesPosts.totalPages
  const page = postState.paginate.paginateGames
  const categories = postState.categoriesReducer.categories
  const gamesPostsRandom = postState.posts.gamesPostsRandom.content

  const newsCategory = categories.find(
    (category) => category?.name === ECategory.GAMES
  )

  useEffect(() => {
    const params = {
      page: page,
      limit: 20,
      condition: `categories.id = "${newsCategory?.id}"`,
      orderBy: 'posts.createdAt',
      orderDirection: 'DESC'
    }
    dispatch(actionFetchPosts(EPostActions.FETCH_GAMES_POSTS, params))
  }, [dispatch, page, newsCategory])

  const onPaginate = (page: number) => {
    dispatch(actionPaginate(EPaginateActions.PAGINATE_GAMES, page))
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
    dispatch(actionFetchPosts(EPostActions.FETCH_GAMES_POSTS_RANDOM, params))
  }, [dispatch, newsCategory])

  return (
    <div>
      <Helmet>
        <title>{ECategory.VARUM + ' | ' + ECategory.GAMES}</title>
      </Helmet>
      <div className='newspage__container'>
        <div className='newspage__body'>
          <Title title={ECategory.GAMES} />
          {gamesPosts?.length > 0 ? (
            <div className='newspage__content'>
              {gamesPosts.map((post: IPost) => (
                <CategoryPostCard
                  key={post.id}
                  post={post}
                  route={routes.games}
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
          {gamesPostsRandom?.length >= 0 ? (
            <NewPost title='Bài viết liên quan' posts={gamesPostsRandom} />
          ) : null}
        </div>
      </div>
      {/* <Ads1 urlName={bannerImgName[1]} style={{ height: 180 }} /> */}
    </div>
  )
}

export default GamesPage
