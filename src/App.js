import React,{Component} from 'react';
import './App.css';
import HeaderComponent from './Component/HeaderComponent';
import {MainClassContainer} from './MainClassContainer';
import FooterComponent from './Component/FooterComponent'; 
//import {MainContainer } from './MainContainer'
class App extends Component {
  constructor(){
    super();
    this.state={
      parentName:'SevenMind from parent',
      counter:5
    }
  }
  render(){
    const props = {
      parentName:this.state.parentName,
      counter:this.state.counter
    }
  return (
    <div className="App">
      <HeaderComponent/>
      {/* <MainContainer/> */}
       <MainClassContainer {...props}/> 
      <FooterComponent/>
    </div>
  );
  }
}

export default App;
