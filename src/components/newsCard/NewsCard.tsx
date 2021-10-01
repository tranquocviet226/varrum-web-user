import AuthorDateViews from '../authoDateViews/AuthorDateViews'
import CategoryCard from '../categoryCard/CategoryCard'

const categories = [
  { id: 1, title: 'Game', color: 'red' },
  { id: 2, title: 'Thế giới mở', color: 'orange' },
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

const NewsCard = () => {
  return (
    <div className='news__card__container'>
      <div className='news__card__image__container'>
        <img
          className='news__card__image__background'
          src={post.img}
          alt=''
        ></img>
      </div>
      <div className='news__card__overlay'>
        <div className='news__card__category'>
          {categories.slice(0, 2).map((item) => (
            <CategoryCard key={item.id} item={item} />
          ))}
        </div>
        <span className='news__card__overlay__title'>{post.title}</span>
        <AuthorDateViews
          author={post.author}
          date={post.date}
          views={post.views}
        />
      </div>
    </div>
  )
}

export default NewsCard
