import moment from 'moment'
import Layout from './views/layouts/Layout'
import 'moment/locale/vi'
import Loading from './components/loading/Loading'
import { HelmetProvider } from 'react-helmet-async'
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.bubble.css'

const App = () => {
  moment.locale('vi')
  return (
    <HelmetProvider>
      <Loading />
      <Layout />
    </HelmetProvider>
  )
}

export default App
