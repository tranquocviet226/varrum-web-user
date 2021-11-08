import { useSelector } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import { AppState } from '../../redux/reducers/rootReducer'
import CreatePost from '../pages/createPost/CreatePost'
import HomePage from '../pages/home/HomePage'
import LoginPage from '../pages/auth/LoginPage'
import NewsPage from '../pages/news/NewsPage'
import PostPage from '../pages/post/PostPage'
import GamesPage from '../pages/games/GamesPage'
import { routes } from '../../common/untils/general'
import ReviewsPage from '../pages/reviews/ReviewsPage'
import TrendingPage from '../pages/trending/TrendingPage'
import HighlightsPage from '../pages/highlight/HighlightsPage'
import AllPage from '../pages/all/AllPage'
import { checkRole } from '../../common/untils/functons'
import { ERole } from '../../common/enums/ERole'
import ProfilePage from '../pages/profile/ProfilePage'
import ForumsPage from '../pages/forums/ForumsPage'
import { ICategory } from '../../common/interfaces/category/ICategory'
import ForumsCategoryPage from '../pages/forums/ForumsCategoryPage'
import { convertToSlug } from '../../common/untils/helpers'
import CreateForumsPage from '../pages/forums/CreateForumsPage'
import ForumDetail from '../pages/forums/ForumDetail'

const Routes = () => {
  const state = useSelector((state: AppState) => state)
  const auth = state.users.auth
  const forumsCategories = state.categoriesReducer.forumsCategories
  const checkAdmin = checkRole(auth?.access?.roles, ERole.ADMIN)

  const renderForumRoute = () => {
    return forumsCategories.map((item: ICategory) => (
      <Route
        key={item.id}
        exact
        path={`${routes.forums}/${convertToSlug(item.name)}`}
        component={ForumsCategoryPage}
      />
    ))
  }

  return (
    <Switch>
      <Route exact path={routes.home} component={HomePage} />
      <Route exact path={routes.login} component={LoginPage}>
        {auth ? <Redirect to={routes.home} /> : <LoginPage />}
      </Route>
      <Route exact path={routes.news} component={NewsPage} />
      <Route exact path={routes.newsDetail} component={PostPage} />
      <Route exact path={routes.postsDetail} component={PostPage} />
      <Route exact path={routes.games} component={GamesPage} />
      <Route exact path={routes.gamesDetail} component={PostPage} />
      <Route exact path={routes.reviews} component={ReviewsPage} />
      <Route exact path={routes.reviewsDetail} component={PostPage} />
      <Route exact path={routes.trendings} component={TrendingPage} />
      <Route exact path={routes.trendingsDetail} component={PostPage} />
      <Route exact path={routes.highlights} component={HighlightsPage} />
      <Route exact path={routes.highlightsDetail} component={PostPage} />
      <Route exact path={routes.all} component={AllPage} />
      <Route exact path={routes.allDetail} component={PostPage} />
      <Route exact path={routes.forums} component={ForumsPage} />
      <Route exact path={routes.forumDetail} component={ForumDetail} />
      <Route
        exact
        render={() => (auth ? <CreateForumsPage /> : <LoginPage />)}
        path={routes.createForums}
      />
      <Route
        exact
        render={() => (auth ? <CreateForumsPage /> : <LoginPage />)}
        path={routes.editForum.concat('/:id')}
      />
      {renderForumRoute()}
      <Route
        exact
        render={() => (auth ? <ProfilePage /> : <LoginPage />)}
        path={routes.profile}
      />
      <Route
        exact
        render={() => (auth && checkAdmin ? <CreatePost /> : <LoginPage />)}
        path={routes.createPost}
      />
      <Route
        exact
        render={() => (auth && checkAdmin ? <CreatePost /> : <LoginPage />)}
        path={routes.editPost}
      />
    </Switch>
  )
}

export default Routes
