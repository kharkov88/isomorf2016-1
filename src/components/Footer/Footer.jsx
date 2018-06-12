import React, { PropTypes, Component } from 'react'
import { Link, Route } from 'react-router-dom'

import './Footer.css'

class Footer extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <footer>
        <div className='copyright'>© 2018 Mobile Web Solutions, Inc.
          <span className='m-hide'>All rights reserved.</span></div>
      </footer>
    )
  }
}

export default ({match}) => (
  <div>
    <Route exact path={`/`} component={Footer} />
    <Route path={`/learn`} component={Footer2} />
  </div>
)

const Footer2 = () => (
  <footer>
      <div className="navigation">
          <div className="container">
              <a href="#learn.html" className="navigation-item learn-item animated bounceInLeft"><span>Not sure you need AMP?</span></a>
              <a href="#portfolio.html" className="navigation-item portfolio-item animated bounceInLeft"><span>See portfolio</span></a>
              <a href="#for-free.html" className="navigation-item for-free-item animated bounceInLeft"><span>Looking for free options</span></a>
              <a href="#contact-us.html" className="navigation-item contact-us-item animated bounceInLeft"><span>Contact us</span></a>
          </div>
      </div>
      <div className="container">
          <div className="footer-links">
              <a href="public-offer.html">Terms of Service</a>
              <a href="privacy-policy.html">Privacy Policy</a>
          </div>
          <div className="copyright">© 2018 Mobile Web Solutions, Inc.</div>
      </div>
  </footer>
)