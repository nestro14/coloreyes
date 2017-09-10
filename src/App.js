import React, { Component } from 'react';
import './App.css';
import Quiz from './components/Quiz.js'
import {connect} from 'react-redux'
import * as actions from './actions'

class App extends Component {

  componentWillMount(){
    this.props.platesList()
  }

  renderList = (plates) =>{
    if(plates){
      return plates.map((plate)=>{
        return (
          <div>{plate.imageName}</div>
        )
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

