import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

interface Props {
  count: number
  defaultPage?: number
  onChange?: (event: React.ChangeEvent<unknown>, val: number) => void
}

const VPagination = ({ count, defaultPage, onChange }: Props) => {
  return (
    <Stack spacing={2}>
      <Pagination
        page={defaultPage ? defaultPage : 1}
        count={count}
        color='secondary'
        variant='outlined'
        shape='rounded'
        onChange={onChange}
      />
    </Stack>
  )
}

export default VPagination
