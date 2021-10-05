interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  className?: string
  onClick?: () => void
}
const VButton = ({ title, className, onClick, ...rest }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`vbutton__container ${className}`}
      {...rest}
    >
      {title}
    </div>
  )
}

export default VButton
