import React,{Component} from 'react';
import './App.css';
import HeaderComponent from './Component/HeaderComponent';
//import {MainClassContainer} from './MainClassContainer';
import FooterComponent from './Component/FooterComponent'; 
import {MainContainer } from './MainContainer'
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
      <MainContainer/>
      {/* <MainClassContainer parentName={this.state.parentName} counter={this.state.counter}/> */}
      <FooterComponent/>
    </div>
  );
  }
}

export default App;
