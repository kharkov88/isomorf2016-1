import React, { PropTypes, Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Header from 'components/Header'
import Footer from 'components/Footer'

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

class LearnPage extends Component {
  componentWillUnmount () {
  }
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    let {url} = this.props.match
    return (
      <div className='learn-page bg-1'>
        <div id='particles-js' />
        <Header />
        <main className='container main'>
          <h1>Not sure you need AMP?</h1>
          <div className='actions row'>
            <div className='grid'>
              <figure className='effect-chico animated bounceInLeft'>
                <Link to={url + '/compare'}>
                  <img src='img/block-image/compare.svg' alt='Compare load speed of any webpage with AMP' />
                  <figcaption>
                    <h2>Compare load speed of your webpage with AMP</h2>
                  </figcaption>
                </Link>
              </figure>
              <figure className='effect-chico animated bounceInUp'>
                <Link to={url + '/services'}>
                  <img src='img/block-image/services.svg' alt='Why order here' />
                  <figcaption>
                    <h2>Why order here / Portfolio</h2>
                  </figcaption>
                </Link>
              </figure>
              <figure className='effect-chico animated bounceInDown'>
                <Link to={url + '/contact-us'}>
                  <img src='img/block-image/contact-expert.svg' alt='Contact expert' />
                  <figcaption>
                    <h2>Contact expert</h2>
                  </figcaption>
                </Link>
              </figure>
              <figure className='effect-chico animated bounceInRight'>
                <Link to={url + '/order'}>
                  <img src='img/block-image/order.svg' alt='Request a quote' />
                  <figcaption>
                    <h2>Request a quote</h2>
                  </figcaption>
                </Link>
              </figure>
            </div>
          </div>
        </main>
        <Footer/>
      </div>
    )
  }
}

export default LearnPage

/*
      <div classNameName='content'>
        <div><h1>We make fast Google AMP pages</h1></div>
        <div classNameName='content-text'>
          <ul>
            <li>Extend your web presence by adding AMP</li>
            <li>Get higher speed web content</li>
            <li>Obtain privileged view in Google search</li>
          </ul>
        </div>
        <div classNameName='content-links'>
          <Link to='/learn'>learn</Link>
          <Link to='/order'>order</Link>
          <Link to='/for-free'>for-free</Link>
          <Link to='/contact-us'>contact-us</Link>
        </div>

      </div>
      */
