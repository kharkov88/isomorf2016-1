import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

import './Footer.css'

class Footer extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className='footer'>
        <Link to='learn'>learn</Link>
        <Link to='order'>order</Link>
        <Link to='for-free'>for-free</Link>
        <Link to='contact-us'>contact-us</Link>
      </div>
    )
  }
}

export default Footer
