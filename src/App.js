import React, { Component } from 'react';
import './App.css';
import Quiz from './components/Quiz.js'
import {connect} from 'react-redux'
import * as actions from './actions'
import Answers from './components/Answers'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer:''
    }
    this.updateAnswer = this.updateAnswer.bind(this);
  }

  updateAnswer(answer){
    console.log("Here in app "+answer)
    this.setState({answer:answer});
  }

  componentWillMount(){
    this.props.platesList()
  }

  renderList = (plates) =>{
    if(plates){
      return plates.map((plate)=>{
        if(plate.id == 1){
        return (
            <div>
              {plate.imageName}
              <canvas id="canvas">Your browser does not support canvas.</canvas>
              <Answers updateAnswer={this.updateAnswer}/>
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

