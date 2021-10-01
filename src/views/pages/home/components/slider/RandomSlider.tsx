import AuthorDateViews from '../../../../../components/authoDateViews/AuthorDateViews'
import Carousel from '../../../../../components/carousel/Carousel'

const data = [
  {
    id: 1,
    title:
      'GTA V full crack moi nhat 2021 GTA V full crack moi nhat 2021 GTA V full crack moi nhat 2021',
    img: 'https://www.dexerto.com/wp-content/uploads/2021/05/17/gta-v-speedrun-no-damage-taken-complete.jpg',
    author: 'VietTQ',
    date: '2021-190-05',
    views: 231
  },
  {
    id: 2,
    title: 'XXX  XXX ',
    img: 'https://cdn.vox-cdn.com/thumbor/1BoZ9iBdXgcBpYNXKsKfAq2ewJM=/0x0:1920x1080/1400x1050/filters:focal(807x387:1113x693):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/51816837/wd_media_screens_reveal_ncsa.0.jpg',
    author: 'VietTQ',
    date: '2021-190-05',
    views: 231
  },
  {
    id: 3,
    title:
      'GTA V full crack moi nhat 2021 GTA V full crack moi nhat 2021 GTA V full crack moi nhat 2021',
    img: 'https://www.dexerto.com/wp-content/uploads/2021/05/17/gta-v-speedrun-no-damage-taken-complete.jpg',
    author: 'VietTQ',
    date: '2021-190-05',
    views: 231
  },
  {
    id: 4,
    title: 'XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX',
    img: 'https://cdn.vox-cdn.com/thumbor/1BoZ9iBdXgcBpYNXKsKfAq2ewJM=/0x0:1920x1080/1400x1050/filters:focal(807x387:1113x693):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/51816837/wd_media_screens_reveal_ncsa.0.jpg',
    author: 'VietTQ',
    date: '2021-190-05',
    views: 231
  },
  {
    id: 5,
    title: 'Nghệ sĩ bàng hoàng, thương tiếc khi Phi Nhung qua đời vì Covid-19',
    img: 'https://www.dexerto.com/wp-content/uploads/2021/05/17/gta-v-speedrun-no-damage-taken-complete.jpg',
    author: 'VietTQ',
    date: '2021-190-05',
    views: 231
  },
  {
    id: 6,
    title: 'GTA V full crack 2021 viet hoa moi nhat (ban uncensored)',
    img: 'https://cdn.vox-cdn.com/thumbor/1BoZ9iBdXgcBpYNXKsKfAq2ewJM=/0x0:1920x1080/1400x1050/filters:focal(807x387:1113x693):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/51816837/wd_media_screens_reveal_ncsa.0.jpg',
    author: 'VietTQ',
    date: '2021-190-05',
    views: 231
  },
  {
    id: 7,
    title: 'GTA V full crack 2021 viet hoa moi nhat (ban uncensored)',
    img: 'https://www.dexerto.com/wp-content/uploads/2021/05/17/gta-v-speedrun-no-damage-taken-complete.jpg',
    author: 'VietTQ',
    date: '2021-190-05',
    views: 231
  }
]

const RandomSlider = () => {
  return (
    <div style={{ marginLeft: -8, marginRight: -8, marginTop: 8 }}>
      <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <Carousel show={4}>
          {data.map((item) => (
            <div key={item.id} className='trending'>
              <div className='trending__slider__container'>
                <div className='animation__image__container'>
                  <img
                    src={item.img}
                    alt='placeholder'
                    className='trending__slider__image'
                  />
                </div>
                <div className='trending__slider__title__container'>
                  <p className='trending__slider__title'>{item.title}</p>
                  <AuthorDateViews
                    author={item.author}
                    date={item.date}
                    views={item.views}
                  />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default RandomSlider
