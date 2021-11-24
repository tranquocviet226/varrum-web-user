import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { LogoVarum } from '../../assets/images'
import { getTheme } from '../../common/untils/functons'
import { mainNav, routes } from '../../common/untils/general'
import { getAvatar } from '../../common/untils/helpers'
import { AppState } from '../../redux/reducers/rootReducer'
import SearchDropdown from '../dropdown/SearchDropdown'
import VDropdownProfile from '../dropdown/VDropdownProfile'
import Search from '../search/Search'

const themes = {
  light: 'theme-light',
  dark: 'theme-dark'
}

const Header = () => {
  const { pathname } = useLocation()
  const users = useSelector((state: AppState) => state.users)
  const auth = users?.auth
  const history = useHistory()
  const activeNav = mainNav.findIndex(
    (e) =>
      e.path === pathname ||
      e.path === `/${pathname.split('/')[1]}` ||
      `/${pathname.split('/')[1]}` === routes.posts ||
      `/${pathname.split('/')[1]}` === routes.trendings ||
      `/${pathname.split('/')[1]}` === routes.highlights ||
      `/${pathname.split('/')[1]}` === routes.all
  )

  const headerRef = useRef<HTMLDivElement>(null)
  const ref = useRef(null)
  const refSearch = useRef(null)
  useOutsideDropdown(ref)
  useOutsideSearch(refSearch)

  const [vdropdownVisible, setVDropdownVisible] = useState(false)
  const [searchVisible, setSearchVisible] = useState(false)

  function useOutsideDropdown(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setVDropdownVisible(false)
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }

  function useOutsideSearch(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setSearchVisible(false)
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }

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

  const themeDefault = getTheme()
  const [themeMode, setThemeMode] = useState(
    themeDefault ? themeDefault : themes.light
  )

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

  const handleCLickProfile = () => {
    if (auth) setVDropdownVisible(!vdropdownVisible)
    else {
      history.push('/login')
    }
  }

  useEffect(() => {
    document.documentElement.className = ''
    document.documentElement.classList.add(themeMode)
    localStorage.setItem('theme', themeMode)
  }, [themeMode])

  return (
    <div className='header' ref={headerRef}>
      <div ref={ref}>
        {vdropdownVisible && (
          <VDropdownProfile
            onClick={() => setVDropdownVisible(!vdropdownVisible)}
          />
        )}
      </div>
      <div ref={refSearch}>
        {searchVisible && (
          <SearchDropdown onBack={() => setSearchVisible(false)} />
        )}
      </div>
      <div className='container header__main'>
        <div className='header__logo'>
          <Link
            to={routes.home}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <img
              src={LogoVarum}
              className='header__logo header__logo__hover'
              style={{ width: 30, height: 30 }}
              alt=''
            />
            <span className='header__name '>arum</span>
          </Link>
          <Search onClickSearch={() => setSearchVisible(true)} />
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
                  <div className='item__hover'>{item.display}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className='header__right'>
          <div
            className='header__right__item hover__icon'
            onClick={handleCLickProfile}
          >
            {auth ? (
              <img
                src={getAvatar(users)}
                className='header__right__avatar'
                alt=''
              />
            ) : (
              <i className='bx bx-user'></i>
            )}
          </div>
          <div className='header__right__item hover__icon'>
            <i className='bx bx-bell'></i>
          </div>
          <div
            onClick={handleChangeTheme}
            className='header__right__item hover__icon'
          >
            <i className='bx bxs-cog'></i>
          </div>
        </div>
      </div>
      <div className='header__line' />
    </div>
  )
}

export default Header
