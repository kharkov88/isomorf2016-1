import React, { PropTypes, Component } from 'react'
import { Link, Route } from 'react-router-dom'
import './Compare.css'

class Compare extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    let {url} = this.props.match
    return (
    <main className="container main">
        <h1 className="animated zoomIn">Compare load speed of your webpage with AMP</h1>
        <div className="description animated zoomIn">
            Get free report about load speed comparison of the specified webpage with AMP page. 
            <br/> Please fill in the form fields below.
        </div>

        <form className="animated zoomIn" id="compare-form" action="compare.html" method="post">
            <div>
                <input type="email" id="compare-email" name="compare-email" className="form-control" placeholder="Email"/>
            </div>
            <div>
                <input type="email" id="compare-url" name="compare-url" className="form-control" placeholder="URL"/>
            </div>
            <div>
                <input id="compare-submit" type="submit" value="Get Free Report" className="form-submit"/>
            </div>
        </form>
    </main>
    )
  }
}

export default ({match}) => (
  <div>
    <Route exact path={`${match.url}`} component={Compare} />
  </div>
)

