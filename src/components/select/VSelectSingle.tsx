import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import * as React from 'react'
import { ICategory } from '../../common/interfaces/category/ICategory'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  categories: ICategory[]
  value?: string
  placeholder?: string
  onChangeCategory: (value: string) => void
}

const VSelectSingle = ({
  categories,
  value,
  placeholder,
  onChangeCategory
}: Props) => {
  const [selectedValues, setSelectedValues] = React.useState<string>('')

  const handleChange = (event: SelectChangeEvent<typeof selectedValues>) => {
    const {
      target: { value }
    } = event
    onChangeCategory(value)
    setSelectedValues(value)
  }

  React.useEffect(() => {
    if (value && value.length > 0) setSelectedValues(value)
  }, [value])

  return (
    <Select
      multiple={false}
      value={selectedValues}
      onChange={handleChange}
      placeholder={placeholder}
      style={{ width: '100%', height: 40 }}
      className='vselect__style'
    >
      {categories.map((item) => (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      ))}
    </Select>
  )
}

export default VSelectSingle
