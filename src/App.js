import React, { Component } from 'react'
import Navbar from './components/Navbar'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Shop from './components/Shop'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Switch>
          <Route exact path= '/' render={() =><Home />}/>
          <Route exact path= '/shop' render={() =><Shop />}/>
        </Switch>
      </div>
    )
  }
}



