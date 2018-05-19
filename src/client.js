import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import App from 'components/App/App.jsx'

const store = configureStore()
console.log('App:' + typeof App)

const component = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(component, document.getElementById('react-view'))
