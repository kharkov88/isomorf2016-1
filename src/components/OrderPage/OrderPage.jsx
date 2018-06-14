import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Header from 'components/Header'
import Footer from 'components/Footer'

// script bg-2
// import three from './bg-2-js/three.min.js'
import linesAnimation from './bg-2-js/3d-lines-animation'
import projector from './bg-2-js/projector'
import canvasRenderer from './bg-2-js/canvas-renderer'

let config = {
  style: {
    margin: '0 auto'
  }
}
class OrderPage extends Component {
  constructor (props) {
    super(props)
    global.navigator
      ? this.elem = document.querySelector('#particles-js')
      : this.elem = {}
  }
  componentDidMount () {
    this.elem.style.display = 'none'
    setTimeout(() => {
      projector()
      canvasRenderer()
      linesAnimation()
    }, 0)
  }
  componentWillUnmount () {
    this.elem.style.display = 'block'
  }
  render () {
    let {url} = this.props.match
    return (
      <div className='order-page bg-2'>
        <Header />
        <main className='container main'>
            <CustomForm />
        </main>
        <div id='canvas' className='gradient' />
        <Footer url={url} />
      </div>
    )
  }
}

class CustomForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      valueName: '',
      valueUrl: '',
      valueEmail: '',
      valueMsg: '',
      startFetch: false,
      response: ''
    }

    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeUrl = this.handleChangeUrl.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChangeName(event) {
    this.setState({valueName: event.target.value});
  }
  handleChangeUrl(event) {
    this.setState({valueUrl: event.target.value});
  }
  handleChangeEmail(event) {
    this.setState({valueEmail: event.target.value});
  }
  handleChangeMsg(event) {
    this.setState({valueMsg: event.target.value});
  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.valueName);
    this.setState({startFetch: !this.state.startFetch})
    setTimeout(() => {
      this.setState({
        response: 'Successful!',
        startFetch: !this.state.startFetch
      })
    },1500)
    setTimeout(() => {
      document.querySelector('.logo a').click()
    },2000)
    event.preventDefault();
  }

  render() {
    return(
      this.state.response.length>1
      ? <h1 style={config.style}>{this.state.response}</h1>
      :
        this.state.startFetch
        ? <h1 style={config.style}>loading...</h1>
        :
        <div style={config.style}>
          <h1 className='animated zoomIn'>Get a quote</h1>
          <section className='order-form animated zoomIn'>
            <div className='order-form-description'>Successful and profitable projects beginning here</div>
            <form id='order-form' onSubmit={this.handleSubmit}>
              <div className='input-block'>
                <div className='left-side'>
                  <input 
                    type='text'
                    id='order-name' 
                    name='order-name' 
                    className='form-control' 
                    placeholder='Name'
                    value={this.state.valueName}
                    onChange={this.handleChangeName}
                  />
                  <input 
                    type='text' 
                    id='order-url' 
                    name='order-url' 
                    className='form-control' 
                    placeholder='URL'
                    value={this.state.valueUrl}
                    onChange={this.handleChangeUrl}
                  />
                  <input type='email' id='order-email' name='order-email' className='form-control' placeholder='Email' />
                </div>
                <div className='right-side'>
                  <textarea id='order-message' name='order-message' className='form-control' placeholder='Tell more about if you wish' />
                </div>
              </div>
              <div className='button-block'>
                <button type='submit' id='order-submit' className='order-form-submit'>
                  <span>SUBMIT REQUEST</span>
                  <i className='material-icons'>chevron_right</i>
                </button>
              </div>
            </form>
          </section>
        </div>
      )
  }
}
export default OrderPage
