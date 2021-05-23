import React, { useState } from "react";
import ReactDOM from 'react-dom';
import calculatorSvg from "../../../../assets/images/tools/calculator-white.svg";
import formulaSvg from "../../../../assets/images/tools/formula-white.svg";
import "./challenge-page-tools.scss";
import Calculator from "../../../calculator/Calculator";
export default function ChallengePageToolsBar() {
  return (
    <div className="challenge-page-tools-container">
      <div className="tool-container">
        <a href="" title="Function input">
          <img src={formulaSvg} alt="" />
        </a>
      </div>
      <div className="tool-container">
        <a title="Calculator">
          <img src={calculatorSvg} alt="" />
        </a>
      </div>
    </div>
  );
}
