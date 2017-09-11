import React, { Component } from 'react';
import './App.css';
import Quiz from './components/Quiz.js'
import {connect} from 'react-redux'
import * as actions from './actions'
import Answers from './components/Answers'
// import loadPlate from './ishihara/ishihara.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer:'',
      current:1
    }
    this.updateAnswer = this.updateAnswer.bind(this);
  }

  updateAnswer(answer){
    console.log("Here in app "+answer)
    console.log("Here in current "+this.state.current)
    this.setState({answer:answer, current:this.state.current+1});
    console.log("Here in current after update "+this.state.current)
  }

  componentWillMount(){
    this.props.platesList();
    //loadPlate();
  }

  renderList = (plates) =>{
    if(plates){
      return plates.map((plate)=>{
        if(plate.id == this.state.current){
        return (
            <div>
              {plate.imageName}
              <canvas id="canvas">Your browser does not support canvas.</canvas>
              {/* {loadPlate()} */}
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

