import React, { PropTypes, Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Header from 'components/Header'
import Footer from 'components/Footer'

class Compare extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    let {url} = this.props.match
    return (
      <div className='compare-page bg-1'>
        <Header />
        <main className='container main'>
          <h1 className='animated zoomIn'>Compare load speed of your webpage with AMP</h1>
          <div className='description animated zoomIn'>
              Get free report about load speed comparison of the specified webpage with AMP page.
            <br /> Please fill in the form fields below.
          </div>

          <form className='animated zoomIn' id='compare-form' action='compare.html' method='post'>
            <div>
              <input type='email' id='compare-email' name='compare-email' className='form-control' placeholder='Email' />
            </div>
            <div>
              <input type='email' id='compare-url' name='compare-url' className='form-control' placeholder='URL' />
            </div>
            <div>
              <input id='compare-submit' type='submit' value='Get Free Report' className='form-submit' />
            </div>
          </form>
        </main>
        <Footer url={url} />
      </div>
    )
  }
}

export default ({match}) => (
  <Switch>
    <Route exact path={`${match.url}`} component={Compare} />
  </Switch>
)
