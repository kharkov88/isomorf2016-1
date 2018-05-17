import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

import './Content.css'

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
        <Link to='learn'>learn</Link>
        <Link to='order'>order</Link>
        <Link to='for-free'>for-free</Link>
        <Link to='contact-us'>contact-us</Link>
      </div>
    )
  }
}

export default Content
