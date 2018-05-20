import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from 'components/App'


const Status = ({ code, children }) => (
  <Route render={({ staticContext }) => {
    if (staticContext) { staticContext.status = code }
    return children
  }} />
)

const NotFound = () => (
  <Status code={404}>
    <div>
      <h1>Sorry, can’t find that.</h1>
    </div>
  </Status>
)

export default (
  <Switch>
    <Route path='/' component={App} />
    <Route path='/:id' component={NotFound} />
  </Switch>
)
