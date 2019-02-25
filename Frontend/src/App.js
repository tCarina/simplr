import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
    <Route exact path = '/' render={ () => {return <h1>This is my homepage</h1>}} />

    <Route exact path ='/dashboard' render={() => {return <h1>Dashboard</h1>}} />

    <Route exact path ='/signup' render ={() => {return <h1>SignUp Page</h1>}} />

    <Route exact path ='/userprofile' render ={() => {return <h1>Profile Page</h1>}} />


      </div>
    );
  }
}

export default App;
