import AuthorDateViews from '../authoDateViews/AuthorDateViews'
import CategoryCard from '../categoryCard/CategoryCard'

const categories = [
  { id: 1, title: 'Game', color: 'red' },
  { id: 2, title: 'Thế giới', color: 'orange' },
  { id: 2, title: 'Mở', color: 'orange' }
]

const post = {
  id: 1,
  title:
    'GTA V full crack (việt hóa) GTA V full crack (việt hóa)(việt hóa)(việt hóa)',
  sortDescription:
    'Phiên bản VR của Resident Evil 4 sẽ được Capcom phát hành độc quyền cho dòng kính thực tế ảo Oculus Quest 2 ngay trong tháng 10 tới.',
  img: 'https://i.pinimg.com/originals/cd/7f/92/cd7f922b19cd8f433790c9381e43bdef.jpg',
  author: 'VietTQ',
  date: '2021-10-05',
  views: 3554
}

const AllPostCard = () => {
  return (
    <div className='all__card__container'>
      <div className='all__card__image__container'>
        <img
          className='all__card__image__background'
          src={post.img}
          alt=''
        ></img>
      </div>
      <div className='all__card__overlay'>
        <div className='all__card__category'>
          {categories.map((item) => (
            <CategoryCard key={item.id} item={item} />
          ))}
        </div>
        <span className='all__card__overlay__title'>{post.title}</span>
        <AuthorDateViews
          author={post.author}
          date={post.date}
          views={post.views}
        />
        <span className='all__card__overlay__description'>
          {post.sortDescription}
        </span>
      </div>
    </div>
  )
}

export default AllPostCard
