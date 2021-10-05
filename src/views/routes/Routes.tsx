import { Route, Switch } from 'react-router-dom'
import HomePage from '../pages/home/HomePage'
import NewsPage from '../pages/news/NewsPage'
import PostPage from '../pages/post/PostPage'

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/news' component={NewsPage} />
      <Route path='/:id' component={PostPage} />
    </Switch>
  )
}

export default Routes
