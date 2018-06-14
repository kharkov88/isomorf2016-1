import React, { PropTypes, Component } from 'react'
import { Link, Route } from 'react-router-dom'

const ROOT = '/'
const LEARN = '/learn'

const config = {
  '/learn': {
    hrefs: ['portfolio', 'for-free', 'contact-us'],
    text: ['See portfolio', 'Looking for free options', 'Contact us']
  },
  '/contact-us': {
    hrefs: ['learn', 'portfolio', 'for-free'],
    text: ['Not sure you need AMP?', 'See portfolio', 'Looking for free options']
  },
  '/learn/compare': {
    hrefs: ['learn', 'portfolio', 'for-free', 'contact-us'],
    text: ['Not sure you need AMP?', 'See portfolio', 'Looking for free options', 'Contact us']
  },
  '/learn/services': {
    hrefs: ['learn', 'portfolio', 'for-free', 'contact-us'],
    text: ['Not sure you need AMP?', 'See portfolio', 'Looking for free options', 'Contact us']
  },
  '/portfolio': {
    hrefs: ['learn', 'for-free', 'contact-us'],
    text: ['Not sure you need AMP?', 'Looking for free options', 'Contact us']
  },
  '/public-offer': {
    hrefs: ['learn', 'portfolio', 'for-free', 'contact-us'],
    text: ['Not sure you need AMP?', 'See portfolio', 'Looking for free options', 'Contact us']
  },
  '/privacy-policy': {
    hrefs: ['learn', 'portfolio', 'for-free', 'contact-us'],
    text: ['Not sure you need AMP?', 'See portfolio', 'Looking for free options', 'Contact us']
  },
  '/order': {
    hrefs: ['learn', 'portfolio', 'for-free', 'contact-us'],
    text: ['Not sure you need AMP?', 'See portfolio', 'Looking for free options', 'Contact us']
  }
}

class Footer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      url: this.props.url
    }
  }
  render () {
    let url = this.state.url
    return (
      url === ROOT
        ? <footer>
          <div className='copyright'>© 2018 Mobile Web Solutions, Inc.
            <span className='m-hide'>All rights reserved.</span></div>
        </footer>
        : <DinamicFooter params={config[url]} />
    )
  }
}

const DinamicFooter = ({params}) => {
  let { hrefs, text } = params
  return (
    <footer>
      <div className='navigation'>
        <div className='container'>
          {
            hrefs.map((item, id) => {
              let href = `/${item}`
              let name = `navigation-item ${item}-item animated bounceInLeft`
              return (
                <Link to={href} key={id} className={name}>
                  <span>{text[id]}</span>
                </Link>
              )
            })
          }
        </div>
      </div>
      <div className='container'>
        <div className='footer-links'>
          <Link to='/public-offer'>Terms of Service</Link>
          <Link to='/privacy-policy'>Privacy Policy</Link>
        </div>
        <div className='copyright'>© 2018 Mobile Web Solutions, Inc.</div>
      </div>
    </footer>
  )
}
export default Footer
