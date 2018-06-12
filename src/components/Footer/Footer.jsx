import React, { PropTypes, Component } from 'react'
import { Link, Route } from 'react-router-dom'

const ROOT = '/'
const LEARN = '/learn'

const config = {
  '/learn': {
    hrefs: ['portfolio', 'for-free', 'contact-us'],
    text: ['See portfolio', 'Looking for free options', 'Contact us']
  },
  '/portfolio': {
    hrefs: ['learn', 'for-free', 'contact-us'],
    text: ['Not sure you need AMP?', 'Looking for free options', 'Contact us']
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
          <a href='#public-offer.html'>Terms of Service</a>
          <a href='#privacy-policy.html'>Privacy Policy</a>
        </div>
        <div className='copyright'>© 2018 Mobile Web Solutions, Inc.</div>
      </div>
    </footer>
  )
}
/*
const CustomLink = ({params}) => {
  let { hrefs, text } = params
  return (
    <div>
      {
        hrefs.map((item, id) => {
          let name = `navigation-item ${item}-item animated bounceInLeft`
          return (
          <Link to={item} key={id} className={name}>
            <span>{text[id]}</span>
          </Link>
          )
        })
      }
    </div>
  )
}
*/
export default Footer

/*
  <a href="learn.html" className="navigation-item learn-item animated bounceInLeft"><span>Not sure you need AMP?</span></a>
  <a href="portfolio.html" className="navigation-item portfolio-item animated bounceInLeft"><span>See portfolio</span></a>
  <a href="for-free.html" className="navigation-item for-free-item animated bounceInLeft"><span>Looking for free options</span></a>
  <a href="contact-us.html" className="navigation-item contact-us-item animated bounceInLeft"><span>Contact us</span></a>
*/
