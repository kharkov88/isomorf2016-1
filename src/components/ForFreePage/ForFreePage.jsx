import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Header from 'components/Header'
import Footer from 'components/Footer'

class ForFreePage extends Component {
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
      <div className='for-free-page bg-1'>
        <Header />
        <main className='container main'>
          <div className='description animated zoomIn'>
            <h1 className='animated zoomIn'>Looking for free options</h1>
          </div>
          <div className='actions row'>
            <div className='grid'>
              <figure className='effect-chico animated bounceInLeft'>
                <a href='https://html2amp.mobilizetoday.com/' target='_blank'>
                  <img src='/img/block-image/3/converter.svg' alt='Free HTML to AMP converter' />
                  <figcaption>
                    <h2>Free HTML to AMP converter</h2>
                  </figcaption>
                </a>
              </figure>
              <figure className='effect-chico animated bounceInUp'>
                <Link to='/compare'>
                  <img src='/img/block-image/3/compare.svg' alt='Compare load speed of any webpage with AMP' />
                  <figcaption>
                    <h2>Compare load speed of your webpage with AMP</h2>
                  </figcaption>
                </Link>
              </figure>
              <figure className='effect-chico animated bounceInRight'>
                <Link to='/order'>
                  <img src='/img/block-image/3/order.svg' alt='Request a quote (for free!)' />
                  <figcaption>
                    <h2>Request a quote for free!</h2>
                  </figcaption>
                </Link>
              </figure>
            </div>
          </div>
        </main>
        <Footer url={url} />
      </div>
    )
  }
}

export default ForFreePage
