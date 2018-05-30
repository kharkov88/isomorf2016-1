
import React, { Component } from 'react'
import ReduxCounter from './ReduxCounter'

class CounterPage extends Component {
  render () {
  	return (
      <div>
      <h1>Counters</h1>
      <h3>State Counter</h3>
      <ReduxCounter />
    </div>
    )
  }
}

export default CounterPage
