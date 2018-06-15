import React, {Component} from 'react'
import axios from 'axios'

function formProps (RComponent) {
  class FormProps extends Component {
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
    handleSubmit (event) {
      this.setState({startFetch: !this.state.startFetch})
      //real request
      axios.post('/send-form', {
      	name: this.state.valueName
      })
      .then(response => {
      	this.setState({ 
      		response: response.data,
      		startFetch: !this.state.startFetch
      	})
      })
      .catch(error => {
      	console.log(error)
      })
      
      //mock request
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
      event.preventDefault()
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
  handleChangeMsg (event) {
    this.setState({valueMsg: event.target.value})
  }

    render () {
      return(
      <RComponent
        handleSubmit={this.handleSubmit}
        handleChangeName={this.handleChangeName}
        handleChangeUrl={this.handleChangeUrl}
        handleChangeEmail={this.handleChangeEmail}
        handleChangeMsg={this.handleChangeMsg}
        valueName={this.state.valueName}
        valueUrl={this.state.valueUrl}
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
