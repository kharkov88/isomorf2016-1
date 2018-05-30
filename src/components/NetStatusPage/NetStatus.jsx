import React, { Component } from 'react'
import classNames from 'classnames'
import './NetStatus.css'
import './animate.css'

const defaultProps = {
  onClick: () => {},
  value: 0
}
const handler = function (e) {
  this.props.onClick()
  this.setState({
    visible: true
  })
  setTimeout(() => {
    this.setState({
      visible: !this.state.visible
    })
  }, 2500)
}
class NetStatus extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: true
    }
  }
  componentDidMount () {
    window.addEventListener('offline', handler.bind(this))
    window.addEventListener('online', handler.bind(this))
    handler.call(this)
  }
  componentWillUnmount () {
    window.removeEventListener('offline', handler.bind(this))
    window.removeEventListener('online', handler.bind(this))
  }
  render () {
    const { onClick, value } = this.props
    let divClass = classNames({
      'net-status': true,
      'animated  bounceInRight': true
    })
    return (
      <div>
        {
          this.state.visible
            ? <div className={divClass}>
              {
                value ? 'You are online!' : 'Offline mode'
              }
            </div>
            : ''
        }
      </div>
    )
  }
}

NetStatus.defaultProps = defaultProps

export default NetStatus
