import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const mainNav = [
  {
    display: 'HOME',
    class: 'bx bxs-home',
    path: '/'
  },
  {
    display: 'NEWS',
    class: 'bx bxs-news',
    path: '/news'
  },
  {
    display: 'GAMES',
    class: 'bx bxs-game',
    path: '/games'
  },
  {
    display: 'REVIEWS',
    class: 'bx bxs-videos',
    path: '/reviews'
  },
  {
    display: 'FORUMS',
    class: 'bx bx-git-repo-forked',
    path: '/forums'
  }
]

const themes = {
  light: 'theme-light',
  dark: 'theme-dark'
}

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
      window.removeEventListener('scroll', () => {})
    }
  }, [])

  const menuLeft = useRef<HTMLDivElement>(null)

  const menuToggle = () => {
    if (menuLeft.current) menuLeft.current.classList.toggle('active')
  }

  const [themeMode, setThemeMode] = useState(themes.dark)

  const handleChangeTheme = () => {
    switch (themeMode) {
      case themes.dark:
        setThemeMode(themes.light)
        break
      case themes.light:
        setThemeMode(themes.dark)
        break
      default:
        setThemeMode(themes.dark)
        break
    }
  }

  useEffect(() => {
    document.documentElement.className = ''
    document.documentElement.classList.add(themeMode)
  }, [themeMode])

  return (
    <div className='header' ref={headerRef}>
      <div className='container header__main'>
        <div className='header__logo'>
          <Link to='/'>
            <img
              src={
                'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/600px-Android_O_Preview_Logo.png'
              }
              alt=''
            />
          </Link>
        </div>
        <div className='header__menu'>
          <div className='header__menu__mobile-toggle' onClick={menuToggle}>
            <i className='bx bx-menu'></i>
          </div>
          <div className='header__menu__left' ref={menuLeft}>
            <div className='header__menu__left__close' onClick={menuToggle}>
              <i className='bx bx-chevron-left'></i>
            </div>
            {mainNav.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className='header__menu__item__link'
              >
                <div
                  key={index}
                  className={`header__menu__item header__menu__left__item ${
                    index === activeNav ? 'active' : ''
                  }`}
                  onClick={menuToggle}
                >
                  <i className={item.class}></i>
                  <span className='header__menu__item__txt'>
                    {' '}
                    {item.display}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className='header__right'>
          <div className='header__right__item'>
            <Link to='/profile'>
              <i className='bx bx-user'></i>
            </Link>
          </div>
          <div className='header__right__item'>
            <Link to='/notifications'>
              <i className='bx bx-bell'></i>
            </Link>
          </div>
          <div className='header__right__item'>
            <i onClick={handleChangeTheme} className='bx bxs-cog'></i>
          </div>
        </div>
      </div>
      <div className='header__line' />
    </div>
  )
}

export default Header
