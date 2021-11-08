export const defaultAvatar = '65411869-d46b-4997-8f5d-e5d0af30b2ca.png'
export const defaultPost = '61f0dab6-a9d7-47d4-9397-0f4afd1342cb.jpg'

export const fbAvatarUrl = (id: string) => {
  return `https://graph.facebook.com/${id}/picture`
}

export const routes = {
  home: '/',
  login: '/login',
  posts: '/posts',
  postsDetail: '/posts/:id',
  news: '/news',
  newsDetail: '/news/:id',
  games: '/games',
  gamesDetail: '/games/:id',
  reviews: '/reviews',
  reviewsDetail: '/reviews/:id',
  trendings: '/trendings',
  trendingsDetail: '/trendings/:id',
  highlights: '/highlights',
  highlightsDetail: '/highlights/:id',
  all: '/all',
  allDetail: '/all/:id',
  forums: '/forums',
  createForums: '/forums/post',
  forumDetail: '/forums/post/:id',
  editForum: '/forums/edit',
  profile: '/profile',
  createPost: '/admin/post',
  editPost: '/admin/post/:id'
}

export const mainNav = [
  {
    display: 'Trang chủ',
    class: 'bx bxs-home',
    path: routes.home
  },
  {
    display: 'Tin tức',
    class: 'bx bxs-news',
    path: routes.news
  },
  {
    display: 'Games',
    class: 'bx bxs-game',
    path: routes.games
  },
  {
    display: 'Reviews',
    class: 'bx bxs-videos',
    path: routes.reviews
  },
  {
    display: 'Diễn đàn',
    class: 'bx bx-git-repo-forked',
    path: routes.forums
  }
]

const linkToPosts = (id: string) => {
  return `${routes.posts}/${id}`
}

const linkToNews = (id: string) => {
  return `${routes.news}/${id}`
}

const linkToGames = (id: string) => {
  return `${routes.games}/${id}`
}

const linkToForum = (id: string) => {
  return `${routes.createForums}/${id}`
}

export { linkToPosts, linkToNews, linkToGames, linkToForum }
