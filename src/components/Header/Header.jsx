import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router-dom'


class Header extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <a href="/">
                      <span className="logo-left">Mobilize</span>
                      <span className="logo-right">Today</span>
                    </a>
                </div>
                <a className="back-link" >
                    <i className="material-icons">keyboard_return</i>
                    <span>Back</span>
                </a>
                <a className="get-quote-link" href="#">Get a quote</a>
            </div>
        </header>
    )
  }
}

export default Header
