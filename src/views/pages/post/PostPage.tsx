import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IPost } from '../../../common/interfaces/post/IPost'
import { getPhotoUrl } from '../../../common/untils/functons'
import CategoryCard from '../../../components/categoryCard/CategoryCard'
import Title from '../../../components/title/Title'
import { setLoading } from '../../../redux/actions/common/commonActions'
import { EPostActions } from '../../../redux/actions/post/EPostActions'
import {
  actionFetchPosts,
  actionShowPost
} from '../../../redux/actions/post/postAction'
import { AppState } from '../../../redux/reducers/rootReducer'
import NewPost from '../home/components/new/NewPost'
import { Helmet } from 'react-helmet-async'
interface Props {
  match: {
    params: { id: string }
  }
}

const PostPage = (props: Props) => {
  const dispatch = useDispatch()
  const id = props.match.params?.id

  const loading = useSelector((state: AppState) => state.common.loading)
  const postState = useSelector((state: AppState) => state.posts)
  const relatedPosts = postState.relatedPosts.content

  const [post, setPost] = useState<IPost | null>(null)

  useEffect(() => {
    const getRelatedPosts = () => {
      let condition = ''
      post?.categories?.forEach((item, index) => {
        if (index <= 0) {
          condition = `categories.id = "${item.id}"`
        } else {
          condition = condition.concat(` OR categories.id = "${item.id}"`)
        }
      })

      const params = {
        page: 1,
        limit: 10,
        condition: condition,
        orderBy: 'posts.createdAt',
        orderDirection: 'DESC'
      }
      dispatch(actionFetchPosts(EPostActions.FETCH_RELATED_POSTS, params))
    }

    getRelatedPosts()
  }, [post, dispatch])

  useEffect(() => {
    const showPost = async () => {
      try {
        dispatch(setLoading(true))
        const response = await actionShowPost(id)
        if (!response.errorType) setPost(response)
      } finally {
        dispatch(setLoading(false))
      }
    }
    showPost()
  }, [dispatch, id])

  const renderPostAuthor = () => {
    return (
      <div className='banner__overlay__author' style={{ fontSize: 12 }}>
        <span className='banner__overlay__author__icon'>
          <i className='bx bxs-user icon_user'></i> {post.author.fullname}
        </span>
        <span className='banner__overlay__author__icon'>
          <i className='bx bx-time-five'></i> {post.date}
        </span>
        <span className='banner__overlay__author__icon'>
          <i className='bx bx-show'></i> {post.views}
        </span>
        <span className='banner__overlay__author__icon'>
          <i className='bx bxs-chat'></i> {post.views}
        </span>
      </div>
    )
  }

  const renderContent = () => {
    return (
      <div className='mt-2'>
        <img
          src={getPhotoUrl(post.photo.name)}
          className='postpage__image'
          alt=''
        />
        <div className='mt-2 ql-container-custom'>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    )
  }
  if (loading) return <div />
  return (
    <div>
      <div className='homepage__container'>
        {post && (
          <div className='homepage__body'>
            <Helmet>
              <title>{post.title}</title>
            </Helmet>
            <div className='categories__container'>
              {post.categories.map((item) => (
                <CategoryCard item={item} key={item.id} />
              ))}
            </div>
            <div className='mt-1'>
              <Title title={post.title} className='postpage__title' />
            </div>
            {renderPostAuthor()}
            {renderContent()}
          </div>
        )}
        <div className='homepage__section'>
          {relatedPosts?.length > 0 ? (
            <>
              <NewPost title='Mới nhất' posts={relatedPosts.slice(0, 5)} />
              <NewPost title='Mới nhất' posts={relatedPosts.slice(5, 10)} />
            </>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default PostPage
