import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './styles/index.scss'
import './assets/boxicons-2.0.9/css/boxicons.min.css'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
