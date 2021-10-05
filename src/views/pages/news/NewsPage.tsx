import moment from 'moment'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ICategory } from '../../../common/interfaces/category/ICategory'
import { parseError } from '../../../common/untils/functons'
import VButton from '../../../components/button/VButton'
import TextEditor from '../../../components/editor/TextEditor'
import VInput from '../../../components/input/VInput'
import VSelect from '../../../components/select/VSelect'
import { UploadApi } from '../../../network/api/upload/uploadApi'
import { configResponse } from '../../../network/responsive'
import { actionGetListCategory } from '../../../redux/actions/category/categoryAction'
import { actionSetNotification } from '../../../redux/actions/notification/notificationAction'
import { actionCreatePost } from '../../../redux/actions/post/postAction'

const NewsPage = () => {
  const dispatch = useDispatch()
  const [categories, setCategories] = useState<ICategory[]>([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [content, setContent] = useState('')
  const [categoriesId, setCategoriesId] = useState<string[]>([])
  const [photoId, setPhotoId] = useState('')

  const handleChangeContent = (content: string) => {
    setContent(content)
  }

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
      data.push(result.id)
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

  const handleSubmit = async () => {
    const value = {
      title,
      description,
      content,
      photo_id: photoId,
      categories_id: categoriesId,
      date: moment().format()
    }

    const data = await actionCreatePost(value)
    if (!data.errorType) window.location.replace('/')
    else {
      dispatch(actionSetNotification(true, parseError(data)))
    }
  }

  useEffect(() => {
    const getListCategory = async () => {
      const data = await actionGetListCategory()
      if (!data.errorType) {
        setCategories(data.content)
      } else {
        dispatch(actionSetNotification(true, parseError(data)))
      }
    }
    getListCategory()
  }, [dispatch])

  return (
    <div style={{ padding: 8 }}>
      <VInput
        placeHolder='Tiêu đề'
        onChangeValue={handleChangeTitle}
        style={{ marginBottom: 8 }}
      />
      <VInput
        placeHolder='Mô tả'
        onChangeValue={handleChangeDescription}
        style={{ marginBottom: 8 }}
      />
      <VSelect
        categories={categories}
        onChangeCategory={handleChangeCategory}
      />
      <input
        type='file'
        onChange={(e) => handleSelectFile(e.target.files[0])}
      />
      <div className='mt-1'></div>
      <TextEditor handleChangeContent={handleChangeContent} />
      <div style={{ marginBottom: 48 }}></div>
      <VButton onClick={handleSubmit} title='Đăng bài' />
    </div>
  )
}

export default NewsPage
