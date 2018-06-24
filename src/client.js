import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from 'components/App/App.jsx'

const component = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.render(component, document.getElementById('react-view'))
