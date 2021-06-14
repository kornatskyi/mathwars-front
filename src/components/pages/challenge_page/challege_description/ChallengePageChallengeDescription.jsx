import React from "react";
import "./challenge-page-challenge-description.scss";

//This is working for some reason I should make something more consistent to display math formulas
import MathJax from "react-mathjax-preview";
export default function ChallengePageChallengeDescription(props) {
  if (props.loading) {
    return (
      <div className="challenge-page-challenge-description-constainer">
        <div>Waiting for challenge load...</div>
      </div>
    );
  } else {
    return (
      <div className="challenge-page-challenge-description-constainer">
        <h2>Task</h2>
        <MathJax math={props.body} />
        {/* <MathJax math={mathMl} /> */}
        <img src={props.host + props.fileName} alt="" />
      </div>
    );
  }
}
