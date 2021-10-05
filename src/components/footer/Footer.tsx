import { Link } from 'react-router-dom'
import Grid from '../grid/Grid'

const footerAboutLinks = [
  {
    display: 'Grand Theft Auto V',
    path: '/about'
  },
  {
    display: 'Watch dogs 2',
    path: '/about'
  },
  {
    display: 'Far cry 5',
    path: '/about'
  },
  {
    display: 'Call of duty: Warzone',
    path: '/about'
  },
  {
    display: 'Ghensin impact',
    path: '/about'
  }
]

const footerCustomerLinks = [
  {
    display: 'Chia sẻ source code hack NASA',
    path: '/about'
  },
  {
    display: 'Kỹ thuật chế tạo tên lửa',
    path: '/about'
  },
  {
    display: 'Bí ẩn vũ trụ: Phần 2 Mặt trăng',
    path: '/about'
  }
]
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div>
            <div className='footer__title'>REVIEWS</div>
            <div className='footer__content'>
              <p>Laptop Acer aspire 7 A42</p>
              <p>Grand Theft Auto V</p>
              <p>Dell Latitude E6430</p>
            </div>
          </div>
          <div>
            <div className='footer__title'>GAMES</div>
            <div className='footer__content'>
              {footerAboutLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className='footer__title'>FORUMS</div>
            <div className='footer__content'>
              {footerCustomerLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div className='footer__about'>
            <p>
              <Link to='/'>
                <img
                  src={
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnsHnZBa8xuKaVeV5yxw-YF-0PJV1EPyizisluGNvBxlMAp2CsP_fi57qc3fUzDzJHtz4&usqp=CAU'
                  }
                  className='footer__logo'
                  alt=''
                />
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
