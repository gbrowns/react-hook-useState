import React, { Component } from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleIncrease = this.handleIncrease.bind(this);
  }

  handleIncrease({count}){
    const {count} = this.state;
    this.setState({
      count: count + 1
    })
  }

  render() {
    return (
      <div>
      <h1>Count: {this.state.count}</h1>
      <button onClick={this.handleIncrease} name ='btn'>Increase Count</button>

      < Counter/>
        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
