import AuthorDateViews from '../../../../../components/authoDateViews/AuthorDateViews'
import CategoryCard from '../../../../../components/categoryCard/CategoryCard'

const categories = [
  { id: 1, title: 'Game', color: 'red' },
  { id: 2, title: 'Thế giới mở', color: 'orange' }
]

const post = {
  id: 1,
  title: 'GTA V full crack (việt hóa)',
  img: 'https://i.pinimg.com/originals/cd/7f/92/cd7f922b19cd8f433790c9381e43bdef.jpg',
  author: 'VietTQ',
  date: '2021-10-05',
  views: 3554
}

const Banner = () => {
  return (
    <div className='banner__container'>
      <img className='banner__image__background' src={post.img} alt=''></img>
      <div className='banner__overlay'>
        <div className='banner__overlay__container'>
          <div style={{ display: 'flex' }}>
            {categories.map((item) => (
              <CategoryCard key={item.id} item={item} />
            ))}
          </div>
          <div style={{ marginTop: 8 }}>
            <span className='banner__overlay__title'>{post.title}</span>
          </div>
          <AuthorDateViews
            author={post.author}
            date={post.date}
            views={post.views}
          />
        </div>
      </div>
    </div>
  )
}

export default Banner
