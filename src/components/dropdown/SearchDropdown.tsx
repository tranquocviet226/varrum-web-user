import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { IPost } from '../../common/interfaces/post/IPost'
import { linkToPosts } from '../../common/untils/general'
import { EPostActions } from '../../redux/actions/post/EPostActions'
import { actionFetchPosts } from '../../redux/actions/post/postAction'
import {
  removeKeyword,
  setKeyword
} from '../../redux/actions/search/searchAction'
import { AppState } from '../../redux/reducers/rootReducer'
import SearchItem from './SearchItem'

interface Props {
  onBack?: () => void
}

const SearchDropdown = ({ onBack }: Props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const state = useSelector((state: AppState) => state)
  const posts = state.posts.searchPosts
  const keywords = state.searchs.keywords
  const [searchKeywords, setSearchKeywords] = useState('')

  let searchTimer: any
  const handleSearch = (value: string, search?: boolean) => {
    clearTimeout(searchTimer)
    searchTimer = setTimeout(
      () => {
        setSearchKeywords(value)
        const params = {
          page: 1,
          limit: 8,
          orderBy: 'posts.createdAt',
          orderDirection: 'DESC',
          search: value
        }
        dispatch(actionFetchPosts(EPostActions.SEARCH_POSTS, params))
        if (value.trim() !== '') dispatch(setKeyword(value))
      },
      search ? 0 : 1000
    )
  }

  const handleSelectItem = (id: string) => {
    onBack()
    history.push(linkToPosts(id))
  }

  const handleDeleteSearch = (index: number) => {
    dispatch(removeKeyword(index))
  }

  return (
    <>
      <div className='search__dropdown'>
        <div className='search__header'>
          <div>
            <i
              onClick={onBack}
              className='bx bx-arrow-back search__icon__back'
            ></i>
          </div>
          <div className='search__input__container'>
            <input
              onChange={(event) => handleSearch(event.target.value)}
              placeholder='Tìm kiếm'
              className='search__input vinput'
              autoFocus
            />
          </div>
        </div>
        <div className='search__recent__container'>
          {searchKeywords.trim() === '' ? (
            <>
              <div className='search__recent mt-2 mb-2'>Tìm kiếm gần đây</div>
              {keywords.map((item, index) => (
                <SearchItem
                  onDelete={() => handleDeleteSearch(index)}
                  onClickItem={() => handleSearch(item, true)}
                  title={item}
                  key={index}
                />
              ))}
            </>
          ) : (
            <>
              {posts?.content?.length < 1 ? (
                <p className='mt-2 mb-2'>Không tìm thấy kết quả phù hợp</p>
              ) : (
                posts?.content?.map((post: IPost) => (
                  <SearchItem
                    onClickItem={() => handleSelectItem(post.id)}
                    key={post.id}
                    title={post.title}
                    image={post.photo.name}
                    isDelete={false}
                  />
                ))
              )}
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default SearchDropdown
