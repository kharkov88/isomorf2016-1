import React, { PropTypes, Component } from 'react'
import { Link, Route } from 'react-router-dom'
import './Learn.css'
import Compare from './Compare'

class Learn extends React.Component {
  componentDidMount () {
    this.setState({
      animate: true
    })
    setTimeout(() => {
      this.setState({
        animate: false
      })
    }, 300)
  }

  constructor (props) {
    super(props)
    this.state = {
      animate: false
    }
  }

  render () {
    let {url} = this.props.match
    return (
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
    )
  }
}
const Services = () => (
  <div>
    <h2>services</h2>
  </div>
)


export default ({match}) => (
  <div>
    <Route exact path={`${match.url}`} component={Learn} />
    <Route path={`${match.url}/services`} component={Services} />
    <Route path={`${match.url}/compare`} component={Compare} />
  </div>
)

/*
      <div classNameName='learn'>
        <div><Link to={url+'/services'}>services</Link></div>
        <div><Link to={url+'/compare'}>compare</Link></div>
      </div>
*/
