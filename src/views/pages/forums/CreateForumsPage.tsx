import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { cleanObject, parseError } from '../../../common/untils/functons'
import TextEditor from '../../../components/editor/TextEditor'
import VInput from '../../../components/input/VInput'
import VSelectSingle from '../../../components/select/VSelectSingle'
import { UploadApi } from '../../../network/api/upload/uploadApi'
import { configResponse } from '../../../network/responsive'
import {
  actionCreateForum,
  actionShowForum,
  actionUpdateForum
} from '../../../redux/actions/forums/forumAction'
import { actionSetNotification } from '../../../redux/actions/notification/notificationAction'
import { AppState } from '../../../redux/reducers/rootReducer'

interface ParamTypes {
  id: string
}

const CreateForumsPage = () => {
  const { id } = useParams<ParamTypes>()
  const dispatch = useDispatch()
  const history = useHistory()
  const categories = useSelector(
    (state: AppState) => state.categoriesReducer.forumsCategories
  )
  const [title, setTitle] = useState('')
  const [hashTag, setHashTag] = useState('')
  const [content, setContent] = useState('')
  const [categoryId, setCategoryId] = useState<string>('')
  const [categorySelected, setCategorySelected] = useState<string>('')
  const [photoId, setPhotoId] = useState('')

  useEffect(() => {
    const fetchDetail = async () => {
      const postDetail = await actionShowForum(id)
      if (!postDetail?.errorType) {
        setTitle(postDetail?.title)
        setContent(postDetail?.content)
        setCategorySelected(postDetail?.category?.id)
        setHashTag(postDetail?.hash_tag)
        setPhotoId(postDetail?.photo?.id)
      }
    }
    if (id) fetchDetail()
    else {
      setTitle('')
      setContent('')
      setCategorySelected('')
      setPhotoId('')
    }
  }, [id])

  const handleChangeTitle = (val: string) => {
    setTitle(val)
  }

  const handleChangeHashTag = (val: string) => {
    setHashTag(val)
  }

  const handleChangeCategory = (value: string) => {
    setCategoryId(value)
  }

  const handleSelectFile = async (file: File) => {
    const response = await UploadApi.upload(file)
    const data = configResponse(response)
    if (!data?.errorType) {
      setPhotoId(data.id)
    } else {
      dispatch(actionSetNotification(true, parseError(data)))
    }
  }

  const handleSubmit = async (content: string) => {
    const value = {
      id,
      title,
      content,
      photo_id: photoId,
      category_id: categoryId,
      hash_tag: hashTag
    }
    let data = null
    if (id) {
      const cleanValue = cleanObject(value)
      data = await actionUpdateForum(cleanValue)
    } else {
      data = await actionCreateForum(value)
    }
    if (!data?.errorType) history.goBack()
    else {
      dispatch(actionSetNotification(true, parseError(data)))
    }
  }

  return (
    <div style={{ padding: 8 }}>
      <VInput
        value={title}
        placeHolder='Tiêu đề'
        onChangeValue={handleChangeTitle}
        style={{ marginBottom: 8 }}
      />
      <VSelectSingle
        value={categorySelected}
        categories={categories}
        placeholder={'Danh mục'}
        onChangeCategory={handleChangeCategory}
      />
      <VInput
        value={hashTag}
        placeHolder='Hash tag'
        onChangeValue={handleChangeHashTag}
        style={{ marginBottom: 8, marginTop: 8 }}
      />
      <input
        type='file'
        onChange={(e) => handleSelectFile(e.target.files[0])}
        style={{ marginTop: 12 }}
      />
      <div className='mt-1'></div>
      <TextEditor
        content={content}
        handleSubmit={handleSubmit}
        handleChangeContent={(val) => setContent(val)}
      />
      <div style={{ marginBottom: 16 }}></div>
    </div>
  )
}

export default CreateForumsPage
