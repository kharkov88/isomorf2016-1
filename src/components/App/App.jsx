import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Content from 'components/Content'
import Footer from 'components/Footer'
import Header from 'components/Header'

import NotFound from 'components/NotFound'
import IndexPage from 'components/IndexPage'
import LearnPage from 'components/LearnPage'
import PortfolioPage from 'components/PortfolioPage'

import './App.css'

class App extends Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={IndexPage} />
        <Route path='/learn' component={LearnPage} />
        <Route path='/portfolio' component={PortfolioPage} />
        <Route component={NotFound} />
      </Switch>
    )
  }
}

export default App
