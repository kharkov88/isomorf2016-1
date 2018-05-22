import React, { Component } from 'react'
import { Link , Route, Switch} from 'react-router-dom'
import Content from 'components/Content/Content.jsx'
import Footer from 'components/Footer/Footer.jsx'
import Learn from 'components/Learn'
import NotFound from 'components/NotFound'

import './bootstrap.css'
import './App.css'

class App extends Component {
  render () {
    //let {url} = this.props.match
    return (
      <div>
        <div className='header'>
          <Link to='/'> Logo</Link>
          <div>We make fast Google AMP pages</div>
          <div>back</div>
        </div>
        <Switch>
          <Route exact path='/' component={Content} />
          <Route path='/learn' component={Learn} />
          <Route path='/order' component={Order} />
          <Route path='/for-free' component={ForFree} />
          <Route path='/contact-us' component={ContactUs} />
          <Route component={NotFound} />
        </Switch>
        <Footer/>
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
