import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

import './Learn.css'

class Learn extends React.Component {
  componentDidMount () {
    let htmlCollection = document.querySelectorAll('.learn-item')
    htmlCollection.forEach( item => {
      item.addEventListener('transitionend', function () {
        console.log(this)
        this.parentNode.removeChild(this)
      })      
    })

    htmlCollection.forEach( item => {
      item.style.opacity = 0
    })
  }
  componentWillUnmount () {
    let htmlCollection = document.querySelectorAll('.learn-item')
    htmlCollection.forEach( item => {
      //item.style.right = 0
    })
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
          <div>animate</div>
        )
      } else {
        return (
          <div className='learn'>
            <div className='learn-page'><h2>content learn</h2></div>
            <div className='learn-item'>link1</div>
            <div className='learn-item'>link2</div>
            <div className='learn-item'>link3</div>
            
          </div>
        )
      }
    }
  }
}

export default Learn
