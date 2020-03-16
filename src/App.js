import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      count: 0,
    }
  }

  handleIncreament = () => {
    this.setState({count: this.state.count + 1});
  }

  handleDecreament = () => {
    this.setState({count: this.state.count - 1});
  }

  render(){
    return (
      <div className="App">
        <h1>Simple Counter App</h1>
        <h3>{ this.state.count }</h3>
        <button onClick = {this.handleIncreament}>+</button>
        <button onClick = {this.handleDecreament}>-</button>
      </div>
    );
  }
}

export default App;
