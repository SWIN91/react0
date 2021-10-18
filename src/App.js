import React, { Component, useState } from 'react';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Switch>
          <Route exact path= '/' render={() =><Home />} />
          <Route exact path= '/shop' render={() =><Shop />} />
          <Route exact path= '/login' render={() =><Login />} />
          <Route exact path= '/signup' render={() =><Signup />} />
        </Switch>
      </div>
    )
  }
};

function Shop() {
  const [count, setCount] = useState(0)
  
  function decrementCount() {
    setCount(prevCount => prevCount - 1)
  };


  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button>+</button>
    </div>
  )
};



