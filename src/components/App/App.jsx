import React, { Component } from 'react'
import { Link , Route, Switch} from 'react-router-dom'
import Content from '../Content/Content.jsx'
import Footer from '../Footer/Footer.jsx'
import Learn from '../Learn'
import './bootstrap.css'
import './App.css'

class App extends Component {
  render () {
    let {url} = this.props.match
    return (
      <div>
        <div className='header'>
          <Link to='/'> Logo</Link>
          <div>We make fast Google AMP pages</div>
          <div>back</div>
        </div>
          <Route exact path={url} component={Content} />
          <Route path={`${url}learn`} component={Learn} />
          <Route path={`${url}order`} component={Order} />
          <Route path={`${url}for-free`} component={ForFree} />
          <Route path={`${url}rcontact-us`} component={ContactUs} />
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
