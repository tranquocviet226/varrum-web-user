interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string
}

const Title = ({ title, ...rest }: Props) => {
  return (
    <span className='title__txt' {...rest}>
      {title}
    </span>
  )
}

export default Title
