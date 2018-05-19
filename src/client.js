import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import routes from './routes'
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import App from 'components/App/App.jsx'

const store = configureStore()

const component = (
  <Provider store={store}>
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(component, document.getElementById('react-view'))
