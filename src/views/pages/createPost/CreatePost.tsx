import moment from 'moment'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { cleanObject, parseError } from '../../../common/untils/functons'
import TextEditor from '../../../components/editor/TextEditor'
import VInput from '../../../components/input/VInput'
import VSelect from '../../../components/select/VSelect'
import { UploadApi } from '../../../network/api/upload/uploadApi'
import { configResponse } from '../../../network/responsive'
import { actionSetNotification } from '../../../redux/actions/notification/notificationAction'
import {
  actionCreatePost,
  actionShowPost,
  actionUpdatePost
} from '../../../redux/actions/post/postAction'
import { AppState } from '../../../redux/reducers/rootReducer'

interface ParamTypes {
  id: string
}

const CreatePost = () => {
  const { id } = useParams<ParamTypes>()
  const dispatch = useDispatch()
  const history = useHistory()
  const categories = useSelector(
    (state: AppState) => state.categoriesReducer.categories
  )
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [content, setContent] = useState('')
  const [categoriesId, setCategoriesId] = useState<string[]>([])
  const [categoriesSelected, setCategoriesSelected] = useState<string[]>([])
  const [photoId, setPhotoId] = useState('')

  useEffect(() => {
    const fetchDetail = async () => {
      const postDetail = await actionShowPost(id)

      if (!postDetail?.errorType) {
        const categoriesName = postDetail?.categories?.map((item) => item.name)
        setTitle(postDetail.title)
        setDescription(postDetail.description)
        setContent(postDetail.content)
        setCategoriesSelected(categoriesName)
        setPhotoId(postDetail.photo.id)
      }
    }
    if (id) {
      fetchDetail()
    } else {
      setTitle('')
      setDescription('')
      setContent('')
      setCategoriesSelected([])
      setPhotoId('')
    }
  }, [id])

  const handleChangeTitle = (val: string) => {
    setTitle(val)
  }

  const handleChangeDescription = (val: string) => {
    setDescription(val)
  }

  const handleChangeCategory = (value: string[]) => {
    let data = []
    value?.map((val: string) => {
      const result = categories.find((category) => category.name === val)
      return data.push(result.id)
    })
    setCategoriesId(data)
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
      description,
      content,
      photo_id: photoId,
      categories_id: categoriesId,
      date: moment().format()
    }
    let data = null
    if (id) {
      const cleanValue = cleanObject(value)
      data = await actionUpdatePost(cleanValue)
    } else {
      data = await actionCreatePost(value)
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
      <VInput
        value={description}
        placeHolder='Mô tả'
        onChangeValue={handleChangeDescription}
        style={{ marginBottom: 8 }}
      />
      <VSelect
        value={categoriesSelected}
        categories={categories}
        onChangeCategory={handleChangeCategory}
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

export default CreatePost
