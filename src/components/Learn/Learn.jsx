import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

import './Learn.css'

class Learn extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      animate: false
    }
  }

  render () {
    {
      if (this.state.animate) {
        return (
          <div>animate</div>
        )
      } else {
        return (
          <div className='learn'>
            <div className='learn-page'><h2>content learn</h2></div>
            <div></div>
            <div></div>
            <div></div>
            
          </div>
        )
      }
    }
  }
}

export default Learn
