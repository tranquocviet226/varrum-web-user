import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { IPost } from '../../common/interfaces/post/IPost'
import { linkToPosts } from '../../common/untils/general'
import { AppState } from '../../redux/reducers/rootReducer'
import Grid from '../grid/Grid'

const Footer = () => {
  const postState = useSelector((state: AppState) => state.posts)
  const posts = postState.randomPosts.content
  return (
    <footer className='footer'>
      <div className='container'>
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div>
            <div className='footer__title'>REVIEWS</div>
            <div className='footer__content'>
              {posts.slice(0, 5).map((item: IPost, index) => (
                <p key={index} className='footer__item__title'>
                  <Link to={linkToPosts(item.id)}>{item.title}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className='footer__title'>GAMES</div>
            <div className='footer__content'>
              {posts.slice(5, 10).map((item: IPost, index) => (
                <p key={index} className='footer__item__title'>
                  <Link to={linkToPosts(item.id)}>{item.title}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className='footer__title'>FORUMS</div>
            <div className='footer__content'>
              {posts.slice(10, 15).map((item: IPost, index) => (
                <p key={index} className='footer__item__title'>
                  <Link to={linkToPosts(item.id)}>{item.title}</Link>
                </p>
              ))}
            </div>
          </div>
          <div className='footer__about'>
            <p>
              <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
                <i className='bx bx-code-alt header__logo'></i>
                <span className='header__name '>Varum</span>
              </Link>
            </p>
            <p>
              Diễn đàng bí ẩn Varrum. Nơi chia sẻ kiến thức vật lý, vũ trụ, bí
              ẩn, công nghệ, con người.
            </p>
          </div>
        </Grid>
      </div>
    </footer>
  )
}

export default Footer
