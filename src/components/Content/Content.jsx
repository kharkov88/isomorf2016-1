import React, { PropTypes, Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'

import './Content.css'

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

class Content extends Component {
  componentWillUnmount () {
    console.log('Content unmont, remove from memory..maybe')
  }
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <div className='content'>
        <div><h1>We make fast Google AMP pages</h1></div>
        <div className='content-text'>
          <ul>
            <li>Extend your web presence by adding AMP</li>
            <li>Get higher speed web content</li>
            <li>Obtain privileged view in Google search</li>
          </ul>
        </div>
        <div className='content-links'>
          <Link to='/learn'>learn</Link>
          <Link to='/order'>order</Link>
          <Link to='/for-free'>for-free</Link>
          <Link to='/contact-us'>contact-us</Link>
        </div>

      </div>
    )
  }
}


export default Content
