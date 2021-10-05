import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './styles/index.scss'
import './assets/boxicons-2.0.9/css/boxicons.min.css'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()
