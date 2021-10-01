import VButton from '../../../components/button/VButton'
import Ads1 from './components/ads/Ads1'
import AllPost from './components/allPost/AllPost'
import Banner from './components/banner/Banner'
import NewPost from './components/new/NewPost'
import RandomPost from './components/random/RandomPost'
import Trending from './components/trending/Trending'

const HomePage = () => {
  return (
    <div>
      <div className='homepage__container'>
        <div className='homepage__body'>
          <Banner />
          <Trending />
          <Ads1 />
        </div>
        <div className='homepage__section'>
          <NewPost title='Mới nhất' />
        </div>
      </div>
      <div className='random__post__container'>
        <RandomPost />
      </div>
      <div className='homepage__container'>
        <div className='homepage__body'>
          <AllPost />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <VButton title='Xem thêm' className='vbutton__all__post' />
          </div>
        </div>
        <div className='homepage__section'>
          <NewPost title='Xếp hạng' />
        </div>
      </div>
      <Ads1 />
    </div>
  )
}

export default HomePage
