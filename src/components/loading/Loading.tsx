import { useSelector } from 'react-redux'
import { AppState } from '../../redux/reducers/rootReducer'

const Loading = () => {
  const loading = useSelector((state: AppState) => state.common.loading)
  return (
    <div className={`loading__body ${loading ? 'isloading' : ''}`}>
      <div className='loader'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default Loading
