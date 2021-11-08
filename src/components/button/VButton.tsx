interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  title?: string
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}
const VButton = ({
  title,
  type = 'button',
  className,
  onClick,
  ...rest
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`vbutton__container ${className}`}
      {...rest}
    >
      {title}
    </button>
  )
}

export default VButton
