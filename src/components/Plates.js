import React, { Component } from 'react';

class Plates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //plateImageSrc: "/images/5.png"
    }
  }

  render(){
    return (
      <div>
        <canvas id="canvas">Your browser does not support canvas.</canvas>
      </div>
    );
  }
}

export default Plates;
