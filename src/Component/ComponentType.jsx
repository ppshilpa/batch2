import React, {Component} from "react";
import { PureComponent } from "react";

export  class CheckPureComponent extends PureComponent{
  constructor(){
    super();
    this.state ={
        counter:0
    };
  }
  componentDidMount(){
    this.setState({
        counter:1
    })
    console.log('componentDidMount');

  }

 
    render(){
        console.log('render called');
        return <h3>My State Counter -:{this.state.counter}</h3>
    }
}

const CreateBold = ({parentName})=>(<b>{parentName}</b>);

const HOCSimple =(Comp) =>{

    return function HOCComp(props){

            return <i><Comp {...props} /></i>;
    }

}

const HOC =HOCSimple(CreateBold);
export default HOC;