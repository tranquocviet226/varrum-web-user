import { Route, Switch } from 'react-router-dom'
import HomePage from '../pages/home/HomePage'
import PostPage from '../pages/post/PostPage'

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/post/:id' component={PostPage} />
    </Switch>
  )
}

export default Routes
