import React, { Component } from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import HookCounter2 from './HookCounter2'
import HookCounter3 from './HookCounter3'
import HookCounter4 from './HookCounter4'
import CreateMessage from './CreateMessage'
import NewCounter from './NewCounter'
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
      
      <HookCounter2 username = 'john doe'/>

      <HookCounter3 />

      <HookCounter4 />

      <CreateMessage />
        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
