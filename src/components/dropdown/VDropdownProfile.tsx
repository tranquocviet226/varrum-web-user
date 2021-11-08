import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ERole } from '../../common/enums/ERole'
import { checkRole } from '../../common/untils/functons'
import { routes } from '../../common/untils/general'
import { getAvatar, getUserValue } from '../../common/untils/helpers'
import { actionLogout } from '../../redux/actions/user/userAction'
import { AppState } from '../../redux/reducers/rootReducer'

interface Props {
  onClick?: () => void
}

const VDropdownProfile = ({ onClick }: Props) => {
  const dispatch = useDispatch()
  const users = useSelector((state: AppState) => state.users)
  const auth = users?.auth

  const handleLogout = () => {
    dispatch(actionLogout())
    window.FB.getLoginStatus(function (response) {
      if (response?.status === 'connected') window.FB.logout()
    })
  }
  const check = checkRole(auth.user.roles, ERole.ADMIN)

  return (
    <>
      <div onClick={onClick} className='vdropdown__profile__container'>
        <Link to={routes.profile}>
          <div className='vdropdown__profile'>
            <img
              src={getAvatar(users)}
              className='vdropdown__profile__avatar'
              alt=''
            />
            <div className='vdropdown__profile__name'>
              <p className='vdropdown__profile__name__fullname'>
                {getUserValue(users, 'fullname')}
              </p>
              <p>Xem trang cá nhân</p>
            </div>
          </div>
        </Link>
        <div className='line'></div>
        {check ? (
          <Link to={routes.createPost}>
            <div className='vdropdown__create__post'>
              <div className='vdropdown__create__post__container'>
                <i className='bx bx-message-rounded-edit vdropdown__create__post__icon'></i>
              </div>
              <p>Viết bài</p>
            </div>
          </Link>
        ) : null}
        <Link to={routes.forums}>
          <div className='vdropdown__create__post'>
            <div className='vdropdown__create__post__container'>
              <i className='bx bx-git-repo-forked vdropdown__create__post__icon'></i>
            </div>
            <p>Forums</p>
          </div>
        </Link>
        <div className='vdropdown__create__post'>
          <div className='vdropdown__create__post__container'>
            <i className='bx bxs-edit vdropdown__create__post__icon'></i>
          </div>
          <p>Đăng bài</p>
        </div>
        <div onClick={() => handleLogout()}>
          <div className='vdropdown__create__post'>
            <div className='vdropdown__create__post__container'>
              <i className='bx bx-log-out-circle vdropdown__create__post__icon'></i>
            </div>
            <p>Đăng xuất</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default VDropdownProfile
