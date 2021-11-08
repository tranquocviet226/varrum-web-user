import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import * as React from 'react'
import { ICategory } from '../../common/interfaces/category/ICategory'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  categories: ICategory[]
  value?: string[]
  multiple?: boolean
  onChangeCategory: (value: string | string[]) => void
}

const VSelect = ({
  categories,
  value,
  multiple = true,
  onChangeCategory
}: Props) => {
  const [selectedValues, setSelectedValues] = React.useState<string[]>([])

  const handleChange = (event: SelectChangeEvent<typeof selectedValues>) => {
    const {
      target: { value }
    } = event
    onChangeCategory(value)
    setSelectedValues(typeof value === 'string' ? value.split(',') : value)
  }

  React.useEffect(() => {
    if (value && value.length > 0) setSelectedValues(value)
  }, [value])

  return (
    <Select
      multiple={multiple}
      value={selectedValues}
      onChange={handleChange}
      renderValue={(selected) => (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {selected.map((value) => (
            <Chip key={value} label={value} style={{ height: 20 }} />
          ))}
        </Box>
      )}
      style={{ width: '100%', height: 40 }}
      className='vselect__style'
    >
      {categories.map((item) => (
        <MenuItem key={item.id} value={item.name}>
          {item.name}
        </MenuItem>
      ))}
    </Select>
  )
}

export default VSelect
