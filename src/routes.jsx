import React from 'react'
import { IndexRoute, Route } from 'react-router'
import App from 'components/App'
import CounterPage from 'components/CounterPage'
import HelloWorldPage from 'components/HelloWorldPage'
import TimePage from 'components/TimePage'

export default (
  <Route path='/' component={App} >
    <IndexRoute component={HelloWorldPage} />
    <Route path='counters' component={CounterPage} />
    <Route path='time' component={TimePage} />
  </Route>
)
