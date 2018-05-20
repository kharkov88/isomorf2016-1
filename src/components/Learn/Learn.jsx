import React, { PropTypes, Component } from 'react'
import { Link, Route } from 'react-router-dom'

import './Learn.css'

class Learn extends React.Component {
  componentDidMount () {
    this.setState({
      animate:true
    })
    setTimeout(() => {
      this.setState({
        animate: false
      })
    }, 1100)
  }
  componentWillUnmount () {
  }
  constructor (props) {
    super(props)
    this.state = {
      animate: false
    }
  }

  render () {
    let {url} = this.props.match
    {
      if (this.state.animate) {
        return (
          <div className='learn-block'>
              animation....
          </div>
        )
      } else {
        return (
          <div className='learn'>
            <div><Link to={url+'/services'}>services</Link></div>
            <div><Link to={url+'/compare'}>compare</Link></div>           
          </div>
        )
      }
    }
  }
}
const Services = () => (
  <div>
    <h2>services</h2>
  </div>
)
const Compare = () => (
  <div>
    <h2>compare</h2>
  </div>
)

export default ({match}) => (
  <div>
    <Route exact path={`${match.url}`} component={Learn}/>
    <Route path={`${match.url}/services`} component={Services}/>
    <Route path={`${match.url}/compare`} component={Compare}/>
  </div>
  )
