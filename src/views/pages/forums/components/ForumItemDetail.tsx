import { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { IComment } from '../../../../common/interfaces/forums/IComment'
import { IPost } from '../../../../common/interfaces/post/IPost'
import { linkToForum, routes } from '../../../../common/untils/general'
import { getUserAvatar, vnDate } from '../../../../common/untils/helpers'
import VAvatar from '../../../../components/avatar/Avatar'
import VInput from '../../../../components/input/VInput'
import {
  actionComment,
  actionGetCommentForum
} from '../../../../redux/actions/forums/forumAction'
import { actionLikeDetail } from '../../../../redux/actions/like/likeAction'
import { AppState } from '../../../../redux/reducers/rootReducer'

interface Props {
  item: IPost
}

const ForumsItemDetail = ({ item }: Props) => {
  const history = useHistory()

  const auth = useSelector((state: AppState) => state.users?.auth)
  const id = item?.id
  const author = item?.author
  const fullname = item?.author?.fullname || ''
  const createdAt = vnDate(item.createdAt) || ''
  const [likes, setLikes] = useState<number>()
  const [userLike, setUserLike] = useState<boolean>()
  const [commentCount, setCommentCount] = useState<number>()
  const [showComment, setShowComment] = useState(false)
  const [comments, setComments] = useState([])
  const [commentValue, setCommentValue] = useState('')

  useEffect(() => {
    setLikes(item?.likes || 0)
    setUserLike(item?.userLike || false)
    setCommentCount(item?.commentCount || 0)
    setShowComment(false)
  }, [item])

  const handleLike = async () => {
    if (auth) {
      const data = await actionLikeDetail(id)
      setUserLike(data?.like || false)
      if (data?.like) setLikes(likes + 1)
      else setLikes(likes - 1)
    } else {
      history.push(routes.login)
    }
  }

  const handleGetComment = async (show: boolean) => {
    const params = {
      page: 1,
      limit: 100,
      orderBy: 'comments.createdAt',
      orderDirection: 'ASC'
    }
    const commentsRes = await actionGetCommentForum(id, params)
    if (commentsRes) {
      const comments = commentsRes?.content

      const parent = comments.filter((item) => !item.parentId.id)
      const children = comments.filter((item) => item.parentId.id)
      parent.map(
        (item) =>
          (item['childrenComment'] = children.filter(
            (child) => item.id === child.parentId.id
          ))
      )
      setComments(parent)
      if (show) setShowComment(!showComment)
    }
  }

  const handleChangeComment = (val: string) => {
    setCommentValue(val)
  }

  const handleSubmitComment = async () => {
    if (auth) {
      const request = {
        forum_id: id,
        content: commentValue
      }
      const data = await actionComment(request)
      if (data) {
        handleGetComment(false)
        setCommentValue('')
        setCommentCount(commentCount + 1)
      }
    } else {
      history.push(routes.login)
    }
  }

  const handleDetailForum = () => {
    history.push(linkToForum(id))
  }

  return (
    <div className='forum__category__container'>
      <div className='forum__category__avatar__container'>
        <img
          src={getUserAvatar(author)}
          className='forum__category__avatar'
          alt=''
        />
        <div>
          <div className='forum__category__avatar__fullname'>{fullname}</div>
          <div
            onClick={handleDetailForum}
            className='forum__category__avatar__date'
          >
            {createdAt}
          </div>
        </div>
      </div>
      <div onClick={handleDetailForum} className='forum__category__title'>
        {item.title}
      </div>
      <div className='forum__category__content'>
        <ReactQuill readOnly value={item.content} theme={'bubble'} />
      </div>
      <div className='line'></div>
      <div className='forum__category__comment'>
        <div
          onClick={handleLike}
          className='forum__category__comment__container'
          style={{ color: userLike ? '#e61414' : undefined }}
        >
          <i
            className={`bx ${
              userLike ? 'bxs-like' : 'bx-like'
            } forum__category__comment__ic`}
          ></i>
          {likes} Th??ch
        </div>
        <div
          onClick={() => handleGetComment(true)}
          className='forum__category__comment__container'
        >
          <i className='bx bx-comment-dots forum__category__comment__ic'></i>
          <div>{commentCount || 0} B??nh lu???n</div>
        </div>
        <div className='forum__category__comment__container'>
          <i className='bx bx-share-alt forum__category__comment__ic'></i>Chia
          s???
        </div>
      </div>
      <div className='line'></div>
      {showComment ? (
        <>
          {comments.length > 0
            ? comments.map((item) => (
                <div className='comment__container' key={item.id}>
                  <Comment comment={item} key={item.id} />{' '}
                </div>
              ))
            : null}
          <div className='comment__input__container'>
            <VAvatar style={styles.avatar} />
            <VInput
              placeholder='Vi???t b??nh lu???n...'
              onChangeValue={handleChangeComment}
              handleSubmit={handleSubmitComment}
              value={commentValue}
              style={{
                borderRadius: 16,
                border: 'none',
                padding: '10px 16px 8px 16px'
              }}
            />
          </div>
        </>
      ) : null}
    </div>
  )
}

export default ForumsItemDetail

const styles = {
  avatar: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    border: '1px solid lightgray',
    marginRight: 4
  }
}

interface CommentProps {
  comment: IComment
}
const Comment = ({ comment }: CommentProps) => {
  return (
    <>
      {' '}
      <div className='comment__item__container'>
        <div className='comment__item__left'>
          <VAvatar style={styles.avatar} item={comment.user} />
          <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p className='comment__item__fullname'>
                {' '}
                {comment.user.fullname} -{' '}
              </p>
              <p style={{ fontSize: 11 }}> {vnDate(comment.createdAt)}</p>
            </div>
            <p> {comment.content}</p>
          </div>
        </div>
        <i className='bx bx-dots-vertical-rounded comment__item__edit'></i>
      </div>
      <div>
        {comment.childrenComment &&
          comment.childrenComment.map((item) => (
            <div key={item.id} className='children__comment__item__container'>
              <Comment comment={item} key={item.id} />
            </div>
          ))}
      </div>
    </>
  )
}
