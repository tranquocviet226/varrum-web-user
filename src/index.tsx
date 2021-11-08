import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './styles/index.scss'
import './assets/boxicons-2.0.9/css/boxicons.min.css'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store/store'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()
