import React, { useState } from 'react'
import './calculator.scss'
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../../logic/calculate";
import './calculator.scss'



export default class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
      coordinateX: 0,
      coordinateY: 0
    };
    this.drag = this.drag.bind(this)
  }

  func = (e) => {
    this.setState(state => ({
      coordinateX: e.clientX,
      coordinateY: e.clientY
    }))
  }

  drag(e) {
    if (e.type === "mousedown") {
      document.addEventListener('mousemove', this.func)
    } else {
      document.removeEventListener('mousemove', this.func)

    }

  }

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {


    return (
      <div className="calculator-container" style={{ top: this.state.coordinateY + "px", left: this.state.coordinateX + "px" }}>
        <div onMouseDown={(e) => this.drag(e)} onMouseUp={(e) => this.drag(e)} className="titlebar"></div>
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div >
    );
  }
}
