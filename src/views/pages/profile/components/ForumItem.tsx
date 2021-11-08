import LazyLoad from 'react-lazyload'
import { useHistory } from 'react-router-dom'
import { IPost } from '../../../../common/interfaces/post/IPost'
import { getPhotoUrl } from '../../../../common/untils/functons'
import {
  defaultPost,
  linkToForum,
  routes
} from '../../../../common/untils/general'
import { convertDate } from '../../../../common/untils/helpers'
import AuthorDateViews from '../../../../components/authoDateViews/AuthorDateViews'

interface Props {
  post: IPost
  handleDelete?: (id: string) => void
}

const ForumItem = ({ post, handleDelete }: Props) => {
  const history = useHistory()
  const id = post?.id || ''
  const title = post?.title || ''
  const author = post?.author?.fullname || ''
  const date = post?.createdAt || ''
  const views = post?.views || 0
  const photo = getPhotoUrl(post?.photo?.name || defaultPost)

  const navigateToPost = () => {
    history.push(linkToForum(id))
  }

  const handleDeletePost = async () => {
    handleDelete(id)
  }

  const handleEditPost = () => {
    history.push(routes.editForum.concat(`/${id}`))
  }

  return (
    <div className='profile__forum__item'>
      <LazyLoad
        offset={[-100, 0]}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <img
          onClick={navigateToPost}
          className='profile__post__item__img'
          src={photo}
          alt=''
        />
        <div className='profile__post__item__content'>
          <p
            onClick={navigateToPost}
            className='profile__post__item__content__title'
          >
            {title}
          </p>
          <div className='profile__post__item__content__description'>
            <AuthorDateViews
              author={author}
              date={convertDate(date)}
              views={views}
            />
          </div>
        </div>
        <div onClick={handleEditPost} className='profile__post__item__edit'>
          <i className='bx bx-message-square-edit'></i>
        </div>
        <div onClick={handleDeletePost} className='profile__post__item__delete'>
          <i className='bx bx-x'></i>
        </div>
      </LazyLoad>
    </div>
  )
}

export default ForumItem
