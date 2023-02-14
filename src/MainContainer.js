import React, { Component } from "react";

export class MainClassContainer extends Component {
    constructor() {
        super();
        this.state = {
            name: 'CodeMind by self',
            batch: 'Second',
            counter: '0'
        };

    }
    static getDerivedStateFromProps(props, state) {
        if(props.counter === state.counter)
        return { name: props.parentName };
        return state;
    }

    componentDidMount() {
        console.log('in componentDidMount');
        setTimeout(() =>{
            this.setState({
                counter: 5
            })
        }, 4000);
    }

    clickMe = (name1) => {
        this.setState({ name: name1 });
    };
    shouldComponentUpdate(){
        console.log('in shouldComponentUpdate',this.state.counter);

        return true;
        
    }
    getSnapshotBeforeUpdate(props, state) {
        console.log('getSnapshotBeforeUpdate', state);
    }
    componentDidUpdate(){
        console.log(this.props,'componentDidUpdate', this.state);

    }
    render() {
        console.log('in render',this.state);

        return (
            <> <button onClick={this.clickMe.bind(this, 'Shilpa')}>Click me</button>

                <h1>My first React class Application</h1>
                <h2>state --{this.state.name}</h2>
                <div>{this.state.batch}</div>
                <h2>{this.state.counter}</h2>
                <div>prop -{this.props.parentName}</div>
            </>

        );
    }
}

//sexport default MainContainer;