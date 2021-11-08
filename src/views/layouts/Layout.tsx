import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Router } from 'react-router-dom'
import { getToken } from '../../common/untils/functons'
import { setToken } from '../../common/untils/helpers'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Notification from '../../components/notification/Notification'
import {
  actionGetListCategory,
  getForumsCategories
} from '../../redux/actions/category/categoryAction'
import { EForumActions } from '../../redux/actions/forums/EForumActions'
import { actionFetchForums } from '../../redux/actions/forums/forumAction'
import { EPostActions } from '../../redux/actions/post/EPostActions'
import { actionFetchPosts } from '../../redux/actions/post/postAction'
import history from '../routes/history'
import Routes from '../routes/Routes'
import ScrollToTop from '../routes/ScrollToTop'

const Layout = () => {
  const dispatch = useDispatch()
  const token = getToken()

  useEffect(() => {
    const getListCategory = async () => {
      dispatch(actionGetListCategory())
    }
    getListCategory()
  }, [dispatch])

  useEffect(() => {
    const getListCategory = async () => {
      dispatch(getForumsCategories())
    }
    getListCategory()
  }, [dispatch])

  useEffect(() => {
    const params = {
      page: 1,
      limit: 15,
      random: true
    }
    dispatch(actionFetchPosts(EPostActions.FETCH_RANDOM_POSTS, params))
  }, [dispatch])

  useEffect(() => {
    const params = {
      page: 1,
      limit: 10,
      orderBy: 'forums.createdAt',
      orderDirection: 'DESC'
    }
    dispatch(actionFetchForums(EForumActions.FETCH_NEW_FORUMS, params))
  }, [dispatch])

  setToken(token)

  return (
    <Router history={history}>
      <ScrollToTop />
      <Notification />
      <Header />
      <div className='container'>
        <div className='main'>
          <Routes />
        </div>
      </div>
      <Footer />
    </Router>
  )
}

export default Layout
