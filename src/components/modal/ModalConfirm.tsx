import VButton from '../button/VButton'
import Title from '../title/Title'

interface Props {
  onCancel?: () => void
  onOk?: () => void
}

const ModalConfirm = ({ onCancel, onOk }: Props) => {
  return (
    <div className='modal'>
      <div className='modal__confirm'>
        <Title title='Xóa bài viết?' />
        <p className='modal__confirm__description'>
          Bạn có chắc chắn muốn xóa bài viết này không?
        </p>
        <div className='modal__confirm__btn'>
          <VButton
            onClick={onCancel}
            title={'Hủy'}
            className='modal__confirm__btn__cancel'
            style={{ width: 100, marginRight: 16 }}
          />
          <VButton onClick={onOk} title={'Xóa'} style={{ width: 100 }} />
        </div>
      </div>
    </div>
  )
}

export default ModalConfirm
