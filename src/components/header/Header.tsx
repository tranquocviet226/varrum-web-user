import { Button } from '@mui/material'
import { useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'


import logo from '../../assets/boxicons-2.0.9/svg/black-banner.png'

const mainNav = [
  {
    display: 'HOME',
    path: '/'
  },
  {
    display: 'NEWS',
    path: '/games'
  },
  {
    display: 'REVIEWS',
    path: '/accessories'
  },
  {
    display: 'ENTERTAINMENT',
    path: '/contact'
  }
  ,
  {
    display: 'HARDWARE',
    path: '/HARDWARE'
  }
  ,
  {
    display: 'PAGE',
    path: '/PAGE'

  }
  ,
  {
    display: 'VIDEO',
    path: '/VIDEO'
  }
]

const mainNav1 = [
  {
    display: 'ENGLIGH',
    path: '/contact'
  }
]

const Header = (props: any) => {
  const { pathname } = useLocation()
  const activeNav = mainNav.findIndex((e) => e.path === pathname)

  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (headerRef.current) {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          headerRef.current.classList.add('shrink')
        } else {
          headerRef.current.classList.remove('shrink')
        }
      }
    })
    return () => {
      window.removeEventListener('scroll', () => { })
    }
  }, [])

  const menuLeft = useRef<HTMLDivElement>(null)

  const menuToggle = () => {
    if (menuLeft.current) menuLeft.current.classList.toggle('active')
  }

  return (
    <div className='header' ref={headerRef}>
      <div className='container'>
        <div className='header__menuup'>
          <div className="header__menuup__top">
            <div className='header__menuup__top__icon'>
              <Link to='/'>
                <img
                  src={
                    'https://www.pngkit.com/png/full/374-3741084_techday-tech-png-logo.png'
                  }
                  alt=''
                />
              </Link>
            </div>
            <div className='header__menuup__top__search'>
              <input type="text" placeholder="Seach here..." />
              <i className='bx bx-search'></i>
            </div>
            <div className="header__menuup__top__btn">
              <div className="header__menuup__top__btn__login">
                <a href="#" className="btn btn-hover">
                  <span>LOG IN</span>
                </a>
              </div>
              <div className="header__menuup__top__btn__signup">
                <a href="#" className="btn btn-hover">
                  <span>Sign up</span>
                </a>
              </div>
            </div>
          </div>

        </div>
        <div className='header__menudown'>
          <div className='header__menudown__mobile-toggle' onClick={menuToggle}>
            <i className='bx bx-menudown-alt-left'></i>
          </div>
          <div className='header__menudown__left' ref={menuLeft}>
            <div className='header__menudown__left__close' onClick={menuToggle}>
              <i className='bx bx-chevron-left'></i>
            </div>
            {mainNav.map((item, index) => (
              <div
                key={index}
                className={`header__menudown__item header__menudown__left__item ${index === activeNav ? 'active' : ''
                  }`}
                onClick={menuToggle}
              >
                <Link to={item.path}>
                  <span>{item.display}</span>
                </Link>
              </div>
            ))}
          </div>
          <div className='header__menudown__right'>
            <span>Choose your language</span>
            {
              mainNav1.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                  <i className='bx bx-chevron-down'></i>
                </p>
              ))
            }
          </div>
        </div>
        <div className='header__line__bottom'></div>
      </div>

    </div>
  )
}

export default Header
