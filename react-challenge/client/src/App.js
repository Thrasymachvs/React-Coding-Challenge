import React, { Component } from 'react';
import './App.css';

export default class ReverseApp extends Component {
  constructor(props) {
  super(props);

  this.state = { userInput: '', reversed: '' };
  this.reverser = this.reverser.bind(this);
  this.handleUserInput = this.handleUserInput.bind(this);

}

  reverser() {
    fetch('/reverse?toReverse=' + this.state.userInput).then(res => res.text())
      .then(reversed => this.setState({ reversed }));
  }
  handleUserInput(e) {
    var curstr = e.target.value;

    this.setState({userInput: curstr});
    this.handleUserInput = this.handleUserInput.bind(this);

  }

  render(){
    return (<div>
              <input type="text" onChange={this.handleUserInput} value = {this.state.userInput}/>
            <button onClick={this.reverser}>Reverse</button>
            <h1>REVERSED:{this.state.reversed}</h1></div>);
  }
}
