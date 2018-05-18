import React from 'react'
import { BrowserRouter, Route } from 'react-router'
import App from 'components/App'
import CounterPage from 'components/CounterPage'
import Content from 'components/Content'
import Learn from 'components/Learn'

const Services = () => (
  <div>
    <h2>services</h2>
  </div>
)
const Compare = () => (
  <div>
    <h2>compare</h2>
  </div>
)
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
  <App/>
)
/*
  <Route path='/' component={App} >
    <IndexRoute component={Content} />
    <Route path='learn' component={Learn}>
      <Route path='/learn/services' component={Services}></Route>
      <Route path='/learn/compare' component={Compare}></Route> 
    </Route>   
    <Route path='order' component={Order} />
    <Route path='for-free' component={ForFree} />
    <Route path='contact-us' component={ContactUs} />
    <Route path='counters' component={CounterPage} />
  </Route>
  */