import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { IRegister } from '../../../common/interfaces/user/IRegister'
import VButton from '../../../components/button/VButton'
import Title from '../../../components/title/Title'
import { actionSetNotification } from '../../../redux/actions/notification/notificationAction'
import { actionRegister } from '../../../redux/actions/user/userAction'

interface Props {
  handleSwitchLogin: () => void
}

const Register = ({ handleSwitchLogin }: Props) => {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const handleSubmitRegister = async (data: IRegister) => {
    const response = await dispatch(actionRegister(data))
    if (response) {
      dispatch(
        actionSetNotification(
          true,
          'Đăng ký thành công. Vui lòng xác thực email để đăng nhập',
          'success'
        )
      )
      handleSwitchLogin()
    }
  }

  return (
    <div className='login__container'>
      <Title title='Đăng ký' size={32} />
      <p className='login__container__slogan'>
        Kết nối với cộng đồng <strong>Varrum</strong> để cùng nhau chia sẻ những
        bài viết tuyệt vời
      </p>
      <form onSubmit={handleSubmit(handleSubmitRegister)}>
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
            type='password'
          />
          {errors.password && (
            <p className='login__container__error'>Vui lòng nhập mật khẩu.</p>
          )}
        </div>
        <input
          {...register('fullname', { required: true })}
          type='text'
          placeholder='Tên đầy đủ'
          className='input__login'
        />
        {errors.fullname && (
          <p className='login__container__error'>Vui lòng nhập tên.</p>
        )}
        <p className='mt-1'>Đăng ký nhanh gọn, không rờm rà, không đa cấp</p>
        <VButton
          type='submit'
          title='Đăng ký'
          style={{ padding: 14, marginTop: 16 }}
        />
      </form>
      <p className='mt-1'>
        Đã có tài khoản?{' '}
        <strong
          onClick={handleSwitchLogin}
          className='login__container__register'
        >
          Đăng nhập ngay
        </strong>
      </p>
    </div>
  )
}

export default Register
