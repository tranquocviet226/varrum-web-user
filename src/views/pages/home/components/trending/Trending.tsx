import Title from '../../../../../components/title/Title'
import TrendingSlider from '../slider/TrendingSlider'

const Trending = () => {
  return (
    <div>
      <div className='trending__title__container'>
        <Title title='Top trending' />
        <div className='trending__view__all'>
          <span>Xem thêm</span>
        </div>
      </div>
      <TrendingSlider />
    </div>
  )
}

export default Trending
