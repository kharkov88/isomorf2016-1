import React from 'react'
import { IndexRoute, Route } from 'react-router'
import App from 'components/App'
import CounterPage from 'components/CounterPage'
import Content from 'components/Content'
import Learn from 'components/Learn'


const Order = () => (
  <div>
    <h2>order</h2>
  </div>
)
const ForFree = () => (
  <div>
    <h2>for-free</h2>
  </div>
)
const ContactUs = () => (
  <div>
    <h2>contact-us</h2>
  </div>
)
export default (
  <Route path='/' component={App} >
    <IndexRoute component={Content} />
    <Route path='learn' component={Learn} />
    <Route path='order' component={Order} />
    <Route path='for-free' component={ForFree} />
    <Route path='contact-us' component={ContactUs} />
    <Route path='counters' component={CounterPage} />
  </Route>
)
