import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import * as React from 'react'
import { ICategory } from '../../common/interfaces/category/ICategory'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  categories: ICategory[]
  onChangeCategory: (value: string | string[]) => void
}

export default function VSelect({ categories, onChangeCategory }: Props) {
  const [personName, setPersonName] = React.useState<string[]>([])

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value }
    } = event

    onChangeCategory(value)
    setPersonName(typeof value === 'string' ? value.split(',') : value)
  }

  return (
    <Select
      multiple
      value={personName}
      onChange={handleChange}
      renderValue={(selected) => (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {selected.map((value) => (
            <Chip key={value} label={value} style={{ height: 20 }} />
          ))}
        </Box>
      )}
      style={{ width: '100%', height: 40 }}
    >
      {categories.map((item) => (
        <MenuItem key={item.id} value={item.name}>
          {item.name}
        </MenuItem>
      ))}
    </Select>
  )
}
