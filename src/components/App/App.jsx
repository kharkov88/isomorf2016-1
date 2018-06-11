import React, { Component } from 'react'
import { Link, Route, Switch} from 'react-router-dom'
import Content from 'components/Content'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Learn from 'components/Learn'
import NotFound from 'components/NotFound'

import './css/main.css'
import './css/animate.css'
import './css/hover.css'

import './App.css'

class App extends Component {
  render () {
    return (
      <div className='index-page bg-1'>
        {
          // <!--BG-1 ELEMENTS-->
          <div id='particles-js' />
          // <!--BG-1 ELEMENTS-->
        }
        <Header />
        <Switch>
          <Route exact path='/' component={Content} />
          <Route path='/learn' component={Learn} />
          <Route path='/order' component={Order} />
          <Route path='/for-free' component={ForFree} />
          <Route path='/contact-us' component={ContactUs} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

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
export default App
