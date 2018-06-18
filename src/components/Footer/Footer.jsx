import React, { PropTypes, Component } from 'react'
import { Link, Route } from 'react-router-dom'
import config from 'configs/footer-links'

const ROOT = '/'
const LEARN = '/learn'

class Footer extends Component {
  render () {
    let url = this.props.url
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
  params = params || config.template
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
