import { useHistory } from 'react-router'
import { IPost } from '../../../../../../common/interfaces/post/IPost'
import { getPhotoUrl } from '../../../../../../common/untils/functons'
import { routes } from '../../../../../../common/untils/general'
import { vnDate } from '../../../../../../common/untils/helpers'

interface Props {
  item: IPost
}

const NewItem = ({ item }: Props) => {
  const history = useHistory()

  const goDetail = () => {
    history.push(`${routes.createForums}/${item.id}`)
  }

  return (
    <div className='newitem__container'>
      <div className='newitem__container__post'>
        <img
          onClick={goDetail}
          src={getPhotoUrl(item.photo.name)}
          className='newitem__avatar'
          alt=''
        />
        <div>
          <p onClick={goDetail} className='newitem__title'>
            {item.title}
          </p>
          <p onClick={goDetail} className='newitem__author'>
            {item.author.fullname} - {vnDate(item.createdAt)}
          </p>
        </div>
      </div>
      <div className='newitem__views'>
        <p className='newitem__views__title'>Views</p>
        <p className='newitem__views__content'>{item.views}</p>
      </div>
    </div>
  )
}

export default NewItem
