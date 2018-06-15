import React, { PropTypes, Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Header from 'components/Header'
import Footer from 'components/Footer'

class PortfolioPage extends Component {
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
      <div className='portfolio bg-1'>

        <Header />
        <main className='container main'>
          <div className='tabs'>
            <h1 className='title animated zoomIn'>Portfolio</h1>
            <ul className='tabs__caption animated bounceInRight'>
              <li className='active'>E-Commerce</li>
              <li>Mass media</li>
              <li>Services</li>
              <li>Website card</li>
            </ul>
            <div className='tabs__content e-commerce-section active ac-wrapper animated zoomInUp'>
              <div className='ac-device'>
                <a href='#'><img src='img/portfolio/amp-icon.png' /></a>
              </div>
              <div className='ac-grid'>
                <a href='portfolio-example-1.html'><img src='img/portfolio/e-commerce/e-commerce-1.png' /><span className='overlay'><span className='sample-title'><i className='material-icons'>flash_on</i>eco-skovoroda</span></span></a>
                <a href='portfolio-example-2.html'><img src='img/portfolio/e-commerce/e-commerce-2.png' /><span className='overlay'><span className='sample-title'><i className='material-icons'>flash_on</i>trikotrahmen</span></span></a>
                <a href='portfolio-example-3.html'><img src='img/portfolio/e-commerce/e-commerce-3.png' /><span className='overlay'><span className='sample-title'><i className='material-icons'>flash_on</i>optima-trade</span></span></a>
                <a href='portfolio-example-4.html'><img src='img/portfolio/e-commerce/e-commerce-4.png' /><span className='overlay'><span className='sample-title'><i className='material-icons'>flash_on</i>зd-toy</span></span></a>
              </div>
            </div>

            <div className='tabs__content mass-media-section ac-wrapper animated zoomInUp'>
              <div className='ac-device'>
                <a href='#'><img src='img/portfolio/amp-icon.png' /></a>
              </div>
              <div className='ac-grid'>
                <a href='portfolio-example-5.html'><img src='img/portfolio/mass-media/mass-media-1.png' /><span className='overlay'><span className='sample-title'><i className='material-icons'>flash_on</i>Flame news</span></span></a>
                <a href='portfolio-example-6.html'><img src='img/portfolio/mass-media/mass-media-2.png' /><span className='overlay'><span className='sample-title'><i className='material-icons'>flash_on</i>In-pocket</span></span></a>
                <a href='portfolio-example-7.html'><img src='img/portfolio/mass-media/mass-media-3.png' /><span className='overlay'><span className='sample-title'><i className='material-icons'>flash_on</i>Tokio NP</span></span></a>
                <a href='portfolio-example-8.html'><img src='img/portfolio/mass-media/mass-media-4.png' /><span className='overlay'><span className='sample-title'><i className='material-icons'>flash_on</i>gazetadaily</span></span></a>
              </div>
            </div>
            <div className='tabs__content services-section ac-wrapper animated zoomInUp'>
              <div className='ac-device'>
                <a href='#'><img src='img/portfolio/amp-icon.png' /></a>
              </div>
              <div className='ac-grid'>
                <a href='portfolio-example-9.html'><img src='img/portfolio/services/services-1.png' /><span className='overlay'><span className='sample-title'><i className='material-icons'>flash_on</i>Klinika</span></span></a>
                <a href='portfolio-example-10.html'><img src='img/portfolio/services/services-2.png' /><span className='overlay'><span className='sample-title'><i className='material-icons'>flash_on</i>lnjuryhelp</span></span></a>
                <a href='portfolio-example-11.html'><img src='img/portfolio/services/services-3.png' /><span className='overlay'><span className='sample-title'><i className='material-icons'>flash_on</i>logistic people</span></span></a>
                <a href='portfolio-example-12.html'><img src='img/portfolio/services/services-4.png' /><span className='overlay'><span className='sample-title'><i className='material-icons'>flash_on</i>web hosting rating</span></span></a>
              </div>
            </div>
            <div className='tabs__content website-card-section ac-wrapper animated zoomInUp'>
              <div className='ac-device'>
                <a href='#'><img src='img/portfolio/amp-icon.png' /></a>
              </div>
              <div className='ac-grid'>
                <a href='portfolio-example-13.html'><img src='img/portfolio/website-card/website-card-1.png' /><span className='overlay'><span className='sample-title'><i className='material-icons'>flash_on</i>goldira rollovers</span></span></a>
                <a href='portfolio-example-14.html'><img src='img/portfolio/website-card/website-card-2.png' /><span className='overlay'><span className='sample-title'><i className='material-icons'>flash_on</i>rene chevalier</span></span></a>
                <a href='portfolio-example-15.html'><img src='img/portfolio/website-card/website-card-3.png' /><span className='overlay'><span className='sample-title'><i className='material-icons'>flash_on</i>lighting maintenance</span></span></a>
                <a href='portfolio-example-16.html'><img src='img/portfolio/website-card/website-card-4.png' /><span className='overlay'><span className='sample-title'><i className='material-icons'>flash_on</i>Notaryreports</span></span></a>
              </div>
            </div>

            <div className='prev-btn animated bounceIn'><i className='material-icons'>keyboard_arrow_left</i></div>
            <div className='next-btn animated bounceIn'><i className='material-icons'>keyboard_arrow_right</i></div>
          </div>
        </main>
        <Footer url={url} />
        //SCRIPTS PORTFOLIO
        //<script src='js/portfolio/appshowcase.js' />
        //<script src='js/portfolio/portfolio-scripts.js' />
      </div>
    )
  }
}

export default PortfolioPage
