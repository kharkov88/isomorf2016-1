import React, {Component} from 'react'
import axios from 'axios'

function formProps (RComponent) {
  class FormProps extends Component {
    componentDidMount () {
      this.setState({
        url: location.pathname
      })
    }
    constructor (props) {
      super(props)
      this.state = {
        valueName: '',
        valueEmail: '',
        valueUrl: '',
        valuePhone: '',
        valueMsg: '',

        startFetch: false,
        response: ''
      }
      this.handleChangeName = this.handleChangeName.bind(this)
      this.handleChangeUrl = this.handleChangeUrl.bind(this)
      this.handleChangeEmail = this.handleChangeEmail.bind(this)
      this.handleChangeMsg = this.handleChangeMsg.bind(this)
      this.handleChangePhone = this.handleChangePhone.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit (event) {
      event.preventDefault()
      let url = `/send-form${this.state.url}`
      let body = {}
      let state = this.state

      if (state.valueName.length < 4) {
        alert('bad data!')
        return
      }
      for (let key in state) {
        (state[key]) && (!!~key.indexOf('value')) && (body[key] = state[key])
      }
      // console.log(body)
      this.setState({startFetch: !this.state.startFetch})

      // real request
      axios.post(url, body)
        .then(response => {
      	this.setState({
      		response: response.data,
      		startFetch: !this.state.startFetch
      	})
        })
        .catch(error => {
      	console.log(error)
        })

      // mock request
      /*
      setTimeout(() => {
        this.setState({
          startFetch: !this.state.startFetch
        })
      }, 1500)
      setTimeout(() => {
        document.querySelector('.logo a').click()
      }, 2000)
      */
    }
    handleChangeName (event) {
      this.setState({valueName: event.target.value})
    }
    handleChangeUrl (event) {
      this.setState({valueUrl: event.target.value})
    }
    handleChangeEmail (event) {
      this.setState({valueEmail: event.target.value})
    }
    handleChangePhone (event) {
      this.setState({valuePhone: event.target.value})
    }
    handleChangeMsg (event) {
      this.setState({valueMsg: event.target.value})
    }

    render () {
      return (
        <RComponent
          handleSubmit={this.handleSubmit}
          handleChangeName={this.handleChangeName}
          handleChangeUrl={this.handleChangeUrl}
          handleChangeEmail={this.handleChangeEmail}
          handleChangeMsg={this.handleChangeMsg}
          handleChangePhone={this.handleChangePhone}
          valueName={this.state.valueName}
          valueUrl={this.state.valueUrl}
          valueEmail={this.state.valueEmail}
          valueMsg={this.state.valueMsg}
          valuePhone={this.state.valuePhone}
          response={this.state.response}
          startFetch={this.state.startFetch}
          {...this.props}
        />)
    }
  }
  FormProps.displayName = `formProps(${RComponent.displayName || RComponent.name || 'Component'})`
  return FormProps
}

export default formProps
