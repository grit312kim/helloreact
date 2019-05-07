import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Hello/>
        <Hi/>
        <Hello2 name='홍길동'
          score='50'
          />
        <Hello2 name='홍길순'
          score='70'
          />
        <Hi2 name='아무개'/>
      </div>
    );
  }
}

class Hello extends React.Component{
  render(){
    return(
      <div>hello</div>
    );
  }
}
class Hello2 extends React.Component{
  constructor(){
    super()
    console.log('Hello2 constructor')
    this.state = {
      score:'30'
    }
  }
  componentWillMount(){
    console.log('Hello2 componentWillMount')
    this.setState(
      {
        score:this.props.score
      }
    )
  }
  render(){
    console.log('Hello2 render')
    return(
      <div>
        hello2, {this.props.name}
        {this.state.score}점       
      </div>
    );
  }
}

const Hi = () =>{
  return (
    <div>Hi</div>
  )
}
const Hi2 = (props) =>{
  return (
    <div>Hi2, {props.name}</div>
  )
}

export default App;
