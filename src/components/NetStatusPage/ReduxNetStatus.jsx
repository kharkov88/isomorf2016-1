import React, { Component } from 'react'
import { connect } from 'react-redux'
import NetStatus from './NetStatus'
import { changeNetStatus } from 'redux/actions/netStatus'

class ReduxNetStatus extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.props.dispatch(changeNetStatus())
  }

  render () {
  	return <NetStatus value={this.props.online} onClick={this.handleClick} />
  }
}

function mapStateToProps (state) {
  const { online } = state
  return {
    online
  }
}

export default connect(mapStateToProps)(ReduxNetStatus)
