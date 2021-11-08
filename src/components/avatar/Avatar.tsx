import { useSelector } from 'react-redux'
import { IUser } from '../../common/interfaces/user/IUser'
import { getAvatar, getUserAvatar } from '../../common/untils/helpers'
import { AppState } from '../../redux/reducers/rootReducer'

interface Props {
  style?: React.CSSProperties
  item?: IUser
}

const VAvatar = ({ style, item }: Props) => {
  const users = useSelector((state: AppState) => state.users)
  return (
    <img
      src={item ? getUserAvatar(item) : getAvatar(users)}
      style={style}
      alt=''
      className='vavatar'
    />
  )
}
export default VAvatar
