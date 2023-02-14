import React,{Component} from 'react';
import './App.css';
import HeaderComponent from './HeaderComponent'
import {MainClassContainer} from './MainContainer'
class App extends Component {
  constructor(){
    super();
    this.state={
      parentName:'SevenMind from parent',
      counter:5
    }
  }
  render(){
  return (
    <div className="App">
      <HeaderComponent/>
      <MainClassContainer parentName={this.state.parentName} counter={this.state.counter}/>
    </div>
  );
  }
}

export default App;
