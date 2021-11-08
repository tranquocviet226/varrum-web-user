interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  size?: number
}

const Title = ({ title, size, ...rest }: Props) => {
  return (
    <span className='title__txt' {...rest} style={{ fontSize: size }}>
      {title}
    </span>
  )
}

export default Title
