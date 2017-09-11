import React, { Component } from 'react';
import './App.css';
// import Quiz from './components/Quiz.js'
import {connect} from 'react-redux'
import * as actions from './actions'
import Answers from './components/Answers'
// import loadPlate from './ishihara/ishihara.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer:'',
      test:'',
      protanopia:0,
      protanomaly:0,
      deuteranopia:0,
      deuteranomaly:0,
      tritanomaly:0,
      tritanopia:0,
      norm:0,
      current:1
    }
    this.updateAnswer = this.updateAnswer.bind(this);
  }

  colorBlindnessIncrementation(answer){
    switch(answer) {
      case "protanopia":
          this.setState({protanopia:this.state.protanopia+1})
          break;
      case "protanomaly":
          this.setState({protanomaly:this.state.protanomaly+1})
          break;
      case "deuteranopia":
          this.setState({deuteranopia:this.state.deuteranopia+1})
          break;
      case "deuteranomaly":
          this.setState({deuteranomaly:this.state.deuteranomaly+1})
          break;
      case "tritanopia":
          this.setState({tritanopia:this.state.tritanopia+1})
          break;
      case "tritanomaly":
          this.setState({tritanomaly:this.state.tritanomaly+1})
          break;
      default:
          this.setState({norm:this.state.norm+1})
    }
  }

  updateAnswer(answer){
    this.setState({answer:answer, current:this.state.current+1});
    this.colorBlindnessIncrementation(answer)
    console.log("State: " + answer + ", current: " + this.state.current + ", protanopia: " + this.state.protanopia + ", protanomaly: " + this.state.protanomaly + ", deuteranopia: " + this.state.deuteranopia + ", deuteranomaly: " + this.state.deuteranomaly + ", tritanopia: " + this.state.tritanopia + ", tritanomaly: " + this.state.tritanomaly + ", norm: " + this.state.norm)
  }

  componentWillMount(){
    this.props.platesList();
    //loadPlate();
  }

  renderList = (plates) =>{
    if(plates){
      return plates.map((plate)=>{
        if(plate.id === this.state.current){
        return (
            <div>
              {plate.imageName}
              <canvas id="canvas">Your browser does not support canvas.</canvas>
              <Answers updateAnswer={this.updateAnswer} plate={plate} key={plate.id}/>
            </div>
        )
      }
      })
    }  
  }

  render() {
    return (
      <div className="App">
       <h1>ColorEyes</h1>
          {this.renderList(this.props.plates)}
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log(state)
  return {
    plates:state.plates
  }
}
export default connect(mapStateToProps,actions)(App);

