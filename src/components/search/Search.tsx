interface Props {
  onClickSearch: () => void
}

const Search = ({ onClickSearch }: Props) => {
  return (
    <div className='search' onClick={onClickSearch}>
      <p className='search__placeholder'>Tìm kiếm</p>
    </div>
  )
}

export default Search
