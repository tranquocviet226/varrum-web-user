interface Props extends React.HTMLAttributes<HTMLDivElement> {
  placeHolder?: string
  onChangeValue?: (val: string) => void
}

const VInput = ({ placeHolder, onChangeValue, ...rest }: Props) => {
  const handleChange = (value: string) => {
    onChangeValue(value)
  }

  return (
    <input
      onChange={(event) => handleChange(event.target.value)}
      {...rest}
      placeholder={placeHolder}
      className='vinput'
    />
  )
}

export default VInput
