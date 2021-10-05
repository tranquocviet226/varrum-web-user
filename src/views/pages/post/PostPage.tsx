import { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import { useDispatch, useSelector } from 'react-redux'
import { IPost } from '../../../common/interfaces/post/IPost'
import { getPhotoUrl } from '../../../common/untils/functons'
import CategoryCard from '../../../components/categoryCard/CategoryCard'
import Title from '../../../components/title/Title'
import { actionShowPost } from '../../../redux/actions/post/postAction'
import { AppState } from '../../../redux/reducers/rootReducer'
import NewPost from '../home/components/new/NewPost'

interface Props {
  match: {
    params: { id: string }
  }
}

const PostPage = (props: Props) => {
  const dispatch = useDispatch()
  const id = props.match.params?.id
  const newPosts = useSelector((state: AppState) => state.posts.newPosts)

  const [post, setPost] = useState<IPost | null>(null)

  useEffect(() => {
    const showPost = async () => {
      const response = await actionShowPost(id)
      if (response) setPost(response)
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
        <div className='mt-2'>
          <ReactQuill value={post.content} readOnly={true} theme={'bubble'} />
        </div>
      </div>
    )
  }

  if (post)
    return (
      <div>
        <div className='homepage__container'>
          <div className='homepage__body'>
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
          <div className='homepage__section'>
            {newPosts.length > 6 ? (
              <NewPost title='Mới nhất' posts={newPosts.slice(1, 6)} />
            ) : null}
          </div>
        </div>
      </div>
    )

  return <div></div>
}

export default PostPage
