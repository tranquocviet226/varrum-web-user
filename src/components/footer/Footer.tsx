import { Link } from 'react-router-dom'
import Grid from '../grid/Grid'



const footerAboutLinks = [
  {
    display: 'Latest Reviews',
    path: '/about'
  },
  {
    display: 'PC',
    path: '/about'
  },
  {
    display: ' PS4',
    path: '/about'
  },
  {
    display: ' Xbox One',
    path: '/about'
  },
  {
    display: 'Wii U',
    path: '/about'
  }
]

const footerCustomerLinks = [
  {
    display: 'Fallout 4 Show',
    path: '/about'
  },
  {
    display: 'GameSpot News',
    path: '/about'
  },
  {
    display: 'GameSpot of Thrones',
    path: '/about'
  },
  {
    display: 'New Releases',
    path: '/about'
  },
  {
    display: 'Now Playing',
    path: '/about'
  }
]
const footerNav = [
  {
    display: 'PRIVACY POLICY',
    path: '/'
  },
  {
    display: 'AD CHOICE',
    path: '/games'
  },
  {
    display: 'TERMS OF USE',
    path: '/accessories'
  },
  {
    display: 'HELP',
    path: '/contact'
  }
  ,
  {
    display: 'ADVERTISE',
    path: '/contact'
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
              <p>
                Latest Reviews
              </p>
              <p>
                PC
              </p>
              <p>
                PS4
              </p>
              <p>
                Xbox One
              </p>
              <p>
                Wii U
              </p>
            </div>
          </div>
          <div>
            <div className='footer__title'>NEWS</div>
            <div className='footer__content'>
              {footerAboutLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className='footer__title'>SHOWS</div>
            <div className='footer__content'>
              {footerCustomerLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div className='footer__about'>
            <div>
              <div className='footer__title'>COMMUNITRY</div>
              <div className='footer__content'>
                <p>
                  Forums
                </p>
                <p>
                  Communitry Blog
                </p>
                <p>

                  <i className='bx bxl-facebook'>    facebook.com/redzon</i>

                </p>
                <p>
                  <i className='bx bxl-twitter'>    twitter.com/redzone</i>

                </p>
                <p>

                  <i className='bx bxl-twitter'>    twitter.tv/redzone</i>

                </p>
              </div>
            </div>
          </div>
        </Grid>
        {/* end footer */}


      </div>
      <div className='footer__line'></div>

      <div className="footerNav">
        <div className='footer__logo'>
          <Link to='/'>
            <img
              src={
                'https://www.pngkit.com/png/full/374-3741084_techday-tech-png-logo.png'
              }
              alt=''
            />
          </Link>
        </div>

        <span className="footerNav__content">
          @ 2020 DailyMagz. Design by PhuonggNam
        </span>

        {
          footerNav.map((item, index) => (
            <p key={index}>
              <Link to={item.path}>{item.display}</Link>
            </p>
          ))
        }
      </div>


    </footer>
  )
}

export default Footer
