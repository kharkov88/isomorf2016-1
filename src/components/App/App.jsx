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
        <Navbar className='navbar-custom'>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/'> Logo</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav navbar className='navbar-right'>
              <LinkContainer to='/counters'>
                <NavItem>back</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Grid>
          {this.props.children}
        </Grid>
        <Footer />
      </div>
    )
  }
}

export default App
