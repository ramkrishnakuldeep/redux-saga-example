import React, { Component } from 'react';
import logo from './logo.svg';
import {API_CALL_REQUEST} from './actions'
import { connect } from "react-redux";

import './App.css';

class App extends Component {
  render() {
    const { fetching, dog, onRequestDog, error } = this.props;
    return (
      <div className="App">
      
        <header className="App-header">
          Welcome to Dog, redux saga
        
        <img src={dog || logo} className="App-logo" alt="logo" />
        <p className="App-intro">
          {dog ?  'Keep Clicking for new dogs': 'Replace the react icon with a dog'}
        </p>
        {fetching ? (
          <button className="dog--button" disabled>Fetching...</button>
        ) : (
          <button className="dog--button" onClick={onRequestDog}>Request a Dog</button>
        )}

        {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
        </header>
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    dog: state.dog,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: () => dispatch({type: API_CALL_REQUEST})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
