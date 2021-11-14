import moment from 'moment'
import Layout from './views/layouts/Layout'
import 'moment/locale/vi'
import Loading from './components/loading/Loading'

const App = () => {
  moment.locale('vi')
  return <>
    <Loading />
    <Layout />
  </>
}

export default App
