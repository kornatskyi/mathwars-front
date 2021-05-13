import React from "react";



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
        <p>
        {props.text}
        </p>
        <img src={props.host + props.images} alt="" />
        <div className="formula">{props.formulas["formula1"]}</div>
        
        <div>To find: {props.shortTask}</div>
        <div>Answer format: {props.answerType} </div>
      </div>
    );
  }
}
