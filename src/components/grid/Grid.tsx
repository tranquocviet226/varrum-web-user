type Props = {
  gap?: number
  col?: number
  mdCol?: number
  smCol?: number
  children?: any
}

const Grid = (props: Props) => {
  const style = {
    gap: props.gap ? `${props.gap}px` : '0'
  }

  const col = props.col ? `grid-col-${props.col}` : ''
  const mdCol = props.mdCol ? `grid-col-md-${props.mdCol}` : ''
  const smCol = props.smCol ? `grid-col-sm-${props.smCol}` : ''

  return (
    <div className={`grid ${col} ${mdCol} ${smCol}`} style={style}>
      {props.children}
    </div>
  )
}

export default Grid
