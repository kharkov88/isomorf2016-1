import React, { PropTypes, Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Header from 'components/Header'
import Footer from 'components/Footer'

import config from 'configs/portfolio-data'

class ExamplePage extends Component {
  constructor (props) {
  	super(props)
  	this.state = {
  		pathname: ''
  	}
  }
  componentDidMount() {
  	this.setState({
  		pathname: location.pathname
  	})
  }
  render () {
    let {pathname, href} = this.state
    let arr = pathname.split('/')
    let title = arr[arr.length-1]
    let {category} = config
    let data={}
    category.map( item => {
    	return item.imgs.map( item => {
    		if(item.title === title) return data=item
    	})
    })
    console.log(data)
    return (
      <div className='portfolio-example bg-1'>
      	<Header />
        <main className='container main'>
          <h1 className='title animated zoomIn'>Portfolio | {title}</h1>
          <div className='portfolio-example-info'>
            <div className='example-image-wrapper'>
              <div className='info-image'>
                <img src={data.href} />
                <a className='example-link animated zoomInLeft' href='http://amp.eco-skovoroda.ru/skovorodi/?sort=5' target='_blank'>
                  <span className='overlay'>
                    <span className='example-link animated zoomInLeft'>Open website</span>
                  </span>
                </a>
              </div>
            </div>
            <div className='example-description'>
              <div className='example-description-column'>
                <p className='parameter-title'>
                  <i className='material-icons'>phone_iphone</i>
                  <span>MOBILE</span> <br /> load speed
                </p>
                <br />
                <p className='parameter-value'>{data.mobileSpeed} sec</p>
              </div>
              <div className='example-description-column'>
                <p className='parameter-title'>
                  <i className='material-icons'>flash_on</i>
                  <span>AMP</span><br /> load speed
                </p>
                <p className='parameter-value'>{data.ampSpeed} sec</p>
              </div>
              <div className='example-qr'>
                <a href='http://amp.eco-skovoroda.ru/skovorodi/?sort=5' target='_blank'>
                  <img src={data.qrcode} alt='eco-skovoroda.ru' />
                </a>
                <div className='qr-description'>
                  <p className='qr-description-title'>AMP URL:</p>
                  <p className='example-link'>
                    <a className='example-link animated zoomInLeft' href={data.ampUrl} target='_blank'>
                    {data.ampUrl}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className='example-order-block'>
              <div className='navigation-block'>
                <div className='prev-example'>
                  <a href='#'>
                    <span className='btn-icon'><i className='material-icons'>keyboard_arrow_left</i></span>
                    <span>Previous</span>
                  </a>
                </div>
                <div className='next-example'>
                  <a href='#'>
                    <span className='btn-icon'><i className='material-icons'>keyboard_arrow_right</i></span>
                    <span>Next</span>
                  </a>
                </div>
              </div>
              <a className='example-order-link' href='#order.html'>Order now</a>
            </div>
          </div>
        </main>
        <Footer />
      </div>

    )
  }
}

export default ExamplePage
