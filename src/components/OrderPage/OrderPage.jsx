import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Header from 'components/Header'
import Footer from 'components/Footer'

// script bg-2
// import three from './bg-2-js/three.min.js'
import linesAnimation from './bg-2-js/3d-lines-animation'
import projector from './bg-2-js/projector'
import canvasRenderer from './bg-2-js/canvas-renderer'

class OrderPage extends Component {
  constructor (props) {
    super(props)
    global.navigator
      ? this.elem = document.querySelector('#particles-js')
      : this.elem = {}
  }
  componentDidMount () {
    this.elem.hidden = true
    let $scrollbar = $('#scrollbar1')
    $scrollbar.tinyscrollbar()

    setTimeout(() => {
      projector()
      canvasRenderer()
      linesAnimation()
    }, 0)
  }
  componentWillUnmount () {
    this.elem.hidden = false
  }
  render () {
    let {url} = this.props.match
    return (
      <div className='order-page bg-2'>
        <Header />
        <main className='container main'>
          <h1 className='animated zoomIn'>Get a quote</h1>
          <section className='order-form animated zoomIn'>
            <div className='order-form-description'>Successful and profitable projects beginning here</div>
            <form id='order-form' action='order.html' method='post'>
              <div className='input-block'>
                <div className='left-side'>
                  <input type='text' id='order-name' name='order-name' className='form-control' placeholder='Name' />
                  <input type='text' id='order-url' name='order-url' className='form-control' placeholder='URL' />
                  <input type='email' id='order-email' name='order-email' className='form-control' placeholder='Email' />
                </div>
                <div className='right-side'>
                  <textarea id='order-message' name='order-message' className='form-control' placeholder='Tell more about if you wish' />
                </div>
              </div>
              <div className='button-block'>
                <button type='submit' id='order-submit' className='order-form-submit'><span>SUBMIT REQUEST</span> <i className='material-icons'>chevron_right</i></button>
              </div>
            </form>
          </section>
        </main>
        <div id='canvas' className='gradient' />
        <Footer url={url} />
      </div>
    )
  }
}

export default OrderPage
