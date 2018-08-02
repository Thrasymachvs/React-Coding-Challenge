import React, { Component } from 'react';
import './App.css';
var axios = require('axios');


export default class LinkInfo extends React.Component{
      constructor(props){
        super(props);
        this.state = { userInput : 'ENTER A LINK', method: 'GET', data: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.handleUserInput=this.handleUserInput.bind(this);
      }

      handleChange(e){
        this.setState({method:e.target.value});
      }

      handleClick () {
        const httpmethod = this.state.method;
        if(httpmethod === "GET"){axios.get(this.state.userInput).then(response => this.setState({data: JSON.stringify(response.data)}));}
        else{
          axios.post(this.state.link).then(response => this.setState({data: JSON.stringify(response.data)}));
        }


  }

      handleUserInput(e) {
        var curstr = e.target.value;

        this.setState({userInput: curstr});
      }

        render(){
          return (<div>
                    <input type="text" onChange={this.handleUserInput} value = {this.state.userInput}/>
                    <select value={this.state.method} onChange={this.handleChange}>
                        <option value = "GET">GET</option>
                        <option value = "POST">POST</option>
                    </select>
                  <button onClick={this.handleClick}>SUBMIT</button>
                  <h1>INFO:{this.state.data}</h1></div>);
        }
      }
