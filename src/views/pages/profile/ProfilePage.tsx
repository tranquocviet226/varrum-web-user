import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IPost } from '../../../common/interfaces/post/IPost'
import { getAvatar, getUserValue } from '../../../common/untils/helpers'
import ModalConfirm from '../../../components/modal/ModalConfirm'
import VPagination from '../../../components/pagination/VPagination'
import Title from '../../../components/title/Title'
import { EForumActions } from '../../../redux/actions/forums/EForumActions'
import {
  actionDeleteForum,
  actionFetchForums
} from '../../../redux/actions/forums/forumAction'
import { EPaginateActions } from '../../../redux/actions/pagination/EPaginateActions'
import { actionPaginate } from '../../../redux/actions/pagination/paginateAction'
import { EPostActions } from '../../../redux/actions/post/EPostActions'
import {
  actionDeletePost,
  actionFetchPosts
} from '../../../redux/actions/post/postAction'
import { AppState } from '../../../redux/reducers/rootReducer'
import ForumItem from './components/ForumItem'
import ProfilePostItem from './components/ProfilePostitem'

const ProfilePage = () => {
  const dispatch = useDispatch()
  const state = useSelector((state: AppState) => state)
  const users = state.users
  const posts = useSelector((state: AppState) => state.posts.userPosts)
  const count = posts.totalPages
  const page = useSelector(
    (state: AppState) => state.paginate.paginateUserPosts
  )
  const userForums = state.forums.userForums

  const [reload, setReload] = useState(false)
  const [modalDelete, setModalDelete] = useState(false)
  const [idDelete, setIdDelete] = useState('')
  const [idDeleteForum, setIdDeleteForum] = useState('')

  useEffect(() => {
    const authorId = getUserValue(users, 'id')
    const params = {
      page: page,
      limit: 10,
      condition: `author.id = "${authorId}"`,
      orderBy: 'posts.createdAt',
      orderDirection: 'DESC'
    }
    dispatch(actionFetchPosts(EPostActions.FETCH_USER_POSTS, params))
  }, [dispatch, users, page, reload])

  useEffect(() => {
    const authorId = getUserValue(users, 'id')
    const params = {
      page: page,
      limit: 10,
      condition: `author.id = "${authorId}"`,
      orderBy: 'forums.createdAt',
      orderDirection: 'DESC'
    }
    dispatch(actionFetchForums(EForumActions.FETCH_USER_FORUMS, params))
  }, [dispatch, users, page, reload])

  const onPaginate = (page: number) => {
    dispatch(actionPaginate(EPaginateActions.PAGINATE_USER_POSTS, page))
  }

  const handleDeletePost = async (id: string) => {
    setIdDelete(id)
    setModalDelete(true)
  }

  const handleDeleteForum = async (id: string) => {
    setIdDeleteForum(id)
    setModalDelete(true)
  }

  const handleCancelModal = () => {
    setIdDelete('')
    setIdDeleteForum('')
    setModalDelete(false)
  }

  const handleComfirmDelete = async () => {
    await actionDeletePost(idDelete)
    await actionDeleteForum(idDeleteForum)
    setReload(!reload)
    handleCancelModal()
  }

  const renderProfileCard = () => {
    return (
      <div className='profile__card'>
        <div className='profile__card__container'>
          <div className='profile__card__avatar'>
            <img
              src={getAvatar(users)}
              className='profile__card__avatar__img'
              alt=''
            />
          </div>
          <div className='vdropdown__profile__name'>
            <p className='vdropdown__profile__name__fullname'>
              {getUserValue(users, 'fullname')}
            </p>
            <p className='profile__card__email'>
              {getUserValue(users, 'email')}
            </p>
          </div>
        </div>
        <div className='profile__card__about'>
          <Title title='Giới thiệu' />
          <p>Tính năng đang phát triển</p>
        </div>
        <div className='profile__card__about'>
          <Title title='Xem gần đây' />
        </div>
      </div>
    )
  }

  const renderPost = () => {
    return (
      <div className='profile__post'>
        <Title title='Bài viết' />
        {posts?.content?.length > 0 ? (
          <>
            {posts.content.map((post: IPost) => (
              <ProfilePostItem
                key={post.id}
                post={post}
                handleDelete={handleDeletePost}
              />
            ))}
            <div className='profile__post__paginate'>
              <VPagination
                defaultPage={page}
                count={count}
                onChange={(_event, page) => onPaginate(page)}
              />
            </div>
          </>
        ) : (
          <p className='mt-2'>Bạn chưa có bài viết nào!</p>
        )}
      </div>
    )
  }

  const renderForums = () => {
    return (
      <>
        <div style={{ margin: '16px 0px 0px 16px' }}>
          <Title title='Bài đăng diễn đàn' />
        </div>
        <div className='profile__forum'>
          {userForums?.content?.length > 0 ? (
            <>
              {userForums.content.map((post: IPost) => (
                <ForumItem
                  key={post.id}
                  post={post}
                  handleDelete={handleDeleteForum}
                />
              ))}
            </>
          ) : (
            <p className='mt-2'>Bạn chưa đăng bài nào!</p>
          )}
        </div>
        <div className='profile__post__paginate'>
          <VPagination
            defaultPage={page}
            count={count}
            onChange={(_event, page) => onPaginate(page)}
          />
        </div>
      </>
    )
  }

  const renderSection = () => {
    return (
      <div className='profile__card'>
        <div className='profile__card__about'>
          <Title title='Nổi bật nhất' />
        </div>
      </div>
    )
  }

  return (
    <div className='profile'>
      {modalDelete ? (
        <ModalConfirm onCancel={handleCancelModal} onOk={handleComfirmDelete} />
      ) : null}

      <div className='profile__container'>
        {renderProfileCard()}
        {renderPost()}
        {renderSection()}
      </div>
      {renderForums()}
    </div>
  )
}

export default ProfilePage
