import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'

class Footer extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <footer>
          <div className="copyright">© 2018 Mobile Web Solutions, Inc. 
          <span className="m-hide">All rights reserved.</span></div>
      </footer>
    )
  }
}

export default Footer
