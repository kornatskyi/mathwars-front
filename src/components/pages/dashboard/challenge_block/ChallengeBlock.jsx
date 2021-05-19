import React from "react";
import './challenge-block.scss';

export default function ChallengeBlock() {
  return (
    <div className="challenge-container">
      <div className="left-column">
          <div className="header">
              <div className="lvl">lvl 3</div>
              <div className="name"><h4>Challenge name</h4></div>
          </div>
          <div className="meta-data">
              <p>Author Name</p>
              <h6>Topics included</h6>
              <span>Algebra 1</span>
              <span>Geometry  1</span>
              <span>Equations</span>
          </div>

      </div>
      <div className="right-column">
        <p>
          The formula for simple interest is given by the formula: I = Prt where
          P = Principal, r = interest rate and t = time What is the value of I
          when P = 5,000, r = 2.5% and t = 4? That is, $5,000 is invested for 4
          years at 2.5% simple interest.
        </p>
        <button className="btn btn-primary">Train</button>
      </div>
    </div>
  );
}
