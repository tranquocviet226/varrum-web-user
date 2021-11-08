import axios from 'axios'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { ErrorTypes } from '../../../common/enums/errorTypes'
import { ILogin } from '../../../common/interfaces/user/ILogin'
import { fbAvatarUrl } from '../../../common/untils/general'
import VButton from '../../../components/button/VButton'
import Loading from '../../../components/loading/Loading'
import Title from '../../../components/title/Title'
import { actionSetNotification } from '../../../redux/actions/notification/notificationAction'
import {
  actionFbLogin,
  actionFbRegister,
  actionLogin
} from '../../../redux/actions/user/userAction'
import { AppState } from '../../../redux/reducers/rootReducer'
import Register from './Register'

declare global {
  interface Window {
    FB: any
  }
}

const LoginPage = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const [isRegister, setIsRegister] = useState(false)
  const [loading, setLoading] = useState(false)
  const auth = useSelector((state: AppState) => state.users.auth)

  useEffect(() => {
    if (auth?.token) {
      setLoading(false)
      history.goBack()
    }
  }, [auth, history])

  const handleSubmitLogin = async (data: ILogin) => {
    dispatch(actionLogin(data))
  }

  const registerFb = async (response) => {
    const authResponse = response?.authResponse
    const accessToken = authResponse?.accessToken
    const user = await getUserInfo(accessToken)
    const fb_avatar = fbAvatarUrl(authResponse?.userID)
    if (user) {
      const params = {
        fb_id: authResponse?.userID,
        fullname: user?.name,
        fb_token: accessToken,
        fb_expiration_time: authResponse?.data_access_expiration_time,
        fb_avatar: fb_avatar
      }
      actionFbRegister(params)
      fbLogin(response)
    }
  }

  const fbRegister = async () => {
    new Promise(() => {
      window.FB.login((response) => {
        if (response) {
          registerFb(response)
        } else {
          setLoading(false)
          console.log('Cancelled login')
        }
      })
    }).catch((err) => {
      setLoading(false)
      console.log(err)
    })
  }

  const fbLogin = (response) => {
    const authResponse = response?.authResponse
    const accessToken = authResponse?.accessToken
    const id = authResponse?.userID
    const data_access_expiration_time =
      authResponse?.data_access_expiration_time

    const params = {
      id: id,
      fb_token: accessToken
    }
    dispatch(
      actionFbLogin(params, async (callback) => {
        if (
          callback &&
          (callback?.errorType === ErrorTypes.USER_NOT_FOUND ||
            callback?.errorType === ErrorTypes.ACCESS_TOKEN_EXPIRED)
        ) {
          const user = await getUserInfo(accessToken)
          const fb_avatar = fbAvatarUrl(authResponse?.userID)
          const paramsUpdate = {
            fb_id: id,
            fullname: user?.name,
            fb_token: accessToken,
            fb_expiration_time: data_access_expiration_time,
            fb_avatar: fb_avatar
          }
          dispatch(actionFbRegister(paramsUpdate))
          fbLogin(response)
        }
      })
    )
  }

  const handleLoginFb = () => {
    setLoading(true)
    window.FB.getLoginStatus(async function (response) {
      if (response.status === 'connected') {
        fbLogin(response)
      } else if (response.status === 'not_authorized') {
        await fbRegister()
      } else {
        await fbRegister()
      }
    })
  }

  const getUserInfo = async (accessToken: string) => {
    return axios
      .get(`https://graph.facebook.com/v8.0/me?access_token=${accessToken}`)
      .then((response) => {
        return response.data
      })
      .catch(() => {
        setLoading(false)
        dispatch(actionSetNotification(true, 'Đăng nhập thất bại'))
      })
  }

  const renderLogin = () => {
    return (
      <>
        {loading ? <Loading /> : null}
        <div className='login__container'>
          <Title title='Đăng nhập' size={32} />
          <p className='login__container__slogan'>
            Kết nối với cộng đồng <strong>Varrum</strong> để cùng nhau chia sẻ
            những bài viết tuyệt vời
          </p>
          <div className='login__socical'>
            <div onClick={handleLoginFb} className='login__socical__item'>
              <i className='bx bxl-facebook-circle item__social'></i> FACEBOOK
            </div>
            <div style={{ width: 16 }}></div>
            <div className='login__socical__item'>
              <i className='bx bxl-google item__social'></i> GOOGLE
            </div>
          </div>
          <p>-- HOẶC --</p>
          <form onSubmit={handleSubmit(handleSubmitLogin)}>
            <input
              {...register('email', { required: true })}
              type='email'
              placeholder='Email'
              className='input__login'
            />
            {errors.email && (
              <p className='login__container__error'>Vui lòng nhập email.</p>
            )}
            <div style={{ position: 'relative' }}>
              <input
                {...register('password', { required: true })}
                placeholder='Mật khẩu'
                className='input__login'
                type={'password'}
              />
              {errors.password && (
                <p className='login__container__error'>
                  Vui lòng nhập mật khẩu.
                </p>
              )}
            </div>
            <p className='login__container__forgot__pass'>Quên mật khẩu</p>
            <VButton
              type='submit'
              title='Đăng nhập'
              style={{ padding: 14, marginTop: 16 }}
            />
          </form>
          <p className='mt-1'>
            Chưa có tài khoản?{' '}
            <strong
              onClick={() => setIsRegister(true)}
              className='login__container__register'
            >
              Đăng ký ngay
            </strong>
          </p>
        </div>
      </>
    )
  }

  return (
    <div className='login'>
      {isRegister ? (
        <Register handleSwitchLogin={() => setIsRegister(false)} />
      ) : (
        renderLogin()
      )}
    </div>
  )
}

export default LoginPage
