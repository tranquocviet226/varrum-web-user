import moment from 'moment'
import Layout from './views/layouts/Layout'
import 'moment/locale/vi'

const App = () => {
  moment.locale('vi')
  return <Layout />
}

export default App
