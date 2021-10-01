import Title from '../../../../../components/title/Title'
import RandomSlider from '../slider/RandomSlider'

const RandomPost = () => {
  return (
    <div>
      <div className='trending__title__container'>
        <Title title='Nổi bật' />
        <div className='trending__view__all'>
          <span>Xem thêm</span>
        </div>
      </div>
      <RandomSlider />
    </div>
  )
}

export default RandomPost
