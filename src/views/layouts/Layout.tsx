import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Notification from '../../components/notification/Notification'
import instance from '../../network/intercepter'
import { EPostActions } from '../../redux/actions/post/EPostActions'
import { actionFetchPosts } from '../../redux/actions/post/postAction'
import { AppState } from '../../redux/reducers/rootReducer'
import Routes from '../routes/Routes'
import ScrollToTop from '../routes/ScrollToTop'

const Layout = () => {
  const dispatch = useDispatch()
  const notifications = useSelector((state: AppState) => state.notifications)

  useEffect(() => {
    const params = {
      page: 1,
      limit: 15,
      orderBy: 'posts.createdAt',
      orderDirection: 'DESC'
    }
    dispatch(actionFetchPosts(EPostActions.FETCH_NEW_POSTS, params))
  }, [dispatch])

  instance.defaults.headers.common[
    'Authorization'
  ] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZjMmU5OWU5LTkyMDEtNDg1Ny04Yzc5LWE4ZjE5NmExM2VjNCIsImVtYWlsIjoidHJhbnF1b2N2aWV0MjI2QGdtYWlsLmNvbSIsImlhdCI6MTYzMzI4MDUyMSwiZXhwIjoxNjMzMzY2OTIxfQ.NU3f1f_ak1G-gPt-m-W7DG4OoYgT9zC9wWqSTfk0eF8`

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Notification open={notifications.open} message={notifications.message} />
      <Route
        render={(props) => (
          <div>
            <Header {...props} />
            <div className='container'>
              <div className='main'>
                <Routes />
              </div>
            </div>
            <Footer />
          </div>
        )}
      />
    </BrowserRouter>
  )
}

export default Layout
