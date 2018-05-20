import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import App from 'components/App/App.jsx'
import routes from './routes'

const store = configureStore()

const component = (
  <Provider store={store}>
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(component, document.getElementById('react-view'))
