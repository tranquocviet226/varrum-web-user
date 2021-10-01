interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  className?: string
}
const VButton = ({ title, className, ...rest }: Props) => {
  return (
    <div className={`vbutton__container ${className}`} {...rest}>
      {title}
    </div>
  )
}

export default VButton
