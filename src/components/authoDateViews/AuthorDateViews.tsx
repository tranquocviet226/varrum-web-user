type Props = {
  author: string
  date: string | Date
  views: number
}

const AuthorDateViews = (props: Props) => {
  const { author, date, views } = props
  return (
    <div className='banner__overlay__author'>
      <span className='banner__overlay__author__icon'>
        <i className='bx bxs-user icon_user'></i> {author}
      </span>
      <span className='banner__overlay__author__icon'>
        <i className='bx bx-time-five'></i> {date}
      </span>
      <span className='banner__overlay__author__icon'>
        <i className='bx bx-show'></i> {views}
      </span>
    </div>
  )
}

export default AuthorDateViews
