import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { getPhotoUrl, parseError } from '../../common/untils/functons'
import { actionUploadPhoto } from '../../redux/actions/photo/photoAction'
import VButton from '../button/VButton'

interface Props {
  content?: string
  handleSubmit?: (val: string) => void
  handleChangeContent?: (val: string) => void
}

let quillObj: any = null

const handleUpload = async (file: File) => {
  const response = await actionUploadPhoto(file)
  if (!response.errorType && quillObj) {
    const range = quillObj?.getEditorSelection()
    const imageUrl = getPhotoUrl(response.name)

    quillObj?.getEditor().insertEmbed(range.index, 'image', imageUrl)
  } else {
    console.log(parseError(response))
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
    console.log('quill no found')
  }
}

const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ align: [] }],
      ['link', 'image', 'video'],
      ['clean'],
      [{ color: [] }]
    ],
    handlers: {
      image: imageHandler
    }
  }
}

const TextEditor = ({ content, handleSubmit, handleChangeContent }: Props) => {
  const handleSubmitEditor = () => {
    if (quillObj) {
      const value = quillObj?.props?.value
      handleSubmit(value)
    }
  }

  return (
    <>
      <ReactQuill
        ref={(el) => {
          quillObj = el
        }}
        onChange={handleChangeContent}
        value={content}
        placeholder={'Enter new content here...'}
        modules={modules}
        style={{ height: 580 }}
      />
      <VButton
        style={{ marginTop: 64 }}
        onClick={handleSubmitEditor}
        title='Đăng bài'
      />
    </>
  )
}

export default TextEditor
