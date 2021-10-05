import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useDispatch } from 'react-redux'
import { getPhotoUrl, parseError } from '../../common/untils/functons'
import { actionSetNotification } from '../../redux/actions/notification/notificationAction'
import { actionUploadPhoto } from '../../redux/actions/photo/photoAction'

interface Props {
  handleChangeContent?: (val: string) => void
}

let quillObj: any = null

const TextEditor = ({ handleChangeContent }: Props) => {
  const dispatch = useDispatch()
  const handleUpload = async (file: File) => {
    const response = await actionUploadPhoto(file)
    if (!response.errorType && quillObj) {
      const range = quillObj?.getEditorSelection()
      const imageUrl = getPhotoUrl(response.name)

      quillObj?.getEditor().insertEmbed(range.index, 'image', imageUrl)
    } else {
      dispatch(actionSetNotification(true, parseError(response)))
    }
  }

  const imageHandler = () => {
    if (quillObj) {
      const input = document.createElement('input')

      input.setAttribute('type', 'file')
      input.setAttribute('accept', 'image/*')
      input.click()

      input.onchange = async () => {
        var file: any = input.files[0]
        handleUpload(file)
      }
    } else {
      dispatch(actionSetNotification(true, 'Ôi!, có lỗi rồi'))
    }
  }

  let delayTimer: any
  const onChangeContent = (val: string) => {
    clearTimeout(delayTimer)
    delayTimer = setTimeout(function () {
      handleChangeContent(val)
    }, 1000)
  }

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ align: [] }],
        ['link', 'image'],
        ['clean'],
        [{ color: [] }]
      ],
      handlers: {
        image: imageHandler
      }
    }
  }

  return (
    <ReactQuill
      ref={(el) => {
        quillObj = el
      }}
      onChange={onChangeContent}
      defaultValue={''}
      placeholder={'Enter new content here...'}
      modules={modules}
      style={{ height: 400 }}
    />
  )
}

export default TextEditor
