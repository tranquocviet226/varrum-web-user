interface Props extends React.HTMLAttributes<HTMLDivElement> {
  placeHolder?: string
  value?: string
  onChangeValue?: (val: string) => void
  handleSubmit?: () => void
}

const VInput = ({
  placeHolder,
  value,
  onChangeValue,
  handleSubmit,
  ...rest
}: Props) => {
  const handleChange = (value: string) => {
    onChangeValue(value)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSubmit()
  }

  return (
    <input
      value={value}
      onChange={(event) => handleChange(event.target.value)}
      onKeyDown={handleKeyDown}
      placeholder={placeHolder}
      className='vinput'
      {...rest}
    />
  )
}

export default VInput
