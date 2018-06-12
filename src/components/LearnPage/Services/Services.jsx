import React, { PropTypes, Component } from 'react'
import { Link, Route } from 'react-router-dom'
import './Learn.css'

class Learn extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    let {url} = this.props.match
    return (

    )
  }
}

export default ({match}) => (
  <div>
    <Route exact path={`${match.url}`} component={Learn} />
    <Route path={`${match.url}/services`} component={Services} />
    <Route path={`${match.url}/compare`} component={Compare} />
  </div>
)

