import React, { Component } from 'react'
import { Link } from 'react-router'
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer'
import Grid from 'react-bootstrap/lib/Grid'
import Nav from 'react-bootstrap/lib/Nav'
import Navbar from 'react-bootstrap/lib/Navbar'
import NavItem from 'react-bootstrap/lib/NavItem'
import Content from 'components/Content'
import Footer from 'components/Footer'
import './bootstrap.css'
import './App.css'

class App extends Component {
  render () {
    return (
      <div>
        <div className='header'>
          <Link to='/'> Logo</Link>
          <div>We make fast Google AMP pages</div>
          <div>back</div>
        </div>
        <Grid>
          {this.props.children}
        </Grid>
        <Footer />
      </div>
    )
  }
}

export default App
