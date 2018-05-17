import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

import './Learn.css'

class Learn extends React.Component {
  componentDidMount () {
    this.setState({
      animate:true
    })
    setTimeout(() => {
      this.setState({
        animate: false
      })
    }, 1100)
  }
  componentWillUnmount () {
  }
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
          <div className='learn-block'>
            <div className='learn-item'>link1</div>
            <div className='learn-item'>link2</div>
            <div className='learn-item'>link3</div>
          </div>
        )
      } else {
        return (
          <div className='learn'>
            <div className='learn-page'><h2>content learn</h2></div>            
          </div>
        )
      }
    }
  }
}

export default Learn
