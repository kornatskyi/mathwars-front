import React from "react";
import "./challenge-block.scss";

export default function ChallengeBlock(props) {
  console.log(props);

  return (
    <div className="challenge-container">
      <div className="left-column">
        <div className="header">
          <div className="lvl">{props.difficulty}</div>
          <div className="name">
            <h4>{props.name}</h4>
          </div>
        </div>
        <div className="meta-data">
          <p>{props.author}</p>
          <h6>Topics included</h6>
          {props.topics.split(" ").map((topic, i) => (
            <span key={i}>{topic}</span>
          ))}
        </div>
      </div>
      <div className="right-column">
        <p  dangerouslySetInnerHTML={{__html: props.body }}></p>
        <button className="btn btn-primary">Train</button>
      </div>
    </div>
  );
}
