import React from "react";
import "./challenge-block.scss";

import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { addChallenge } from "../../../../redux/challengeSlice";

export default function ChallengeBlock(props) {
  console.log(props);

  const dispatch = useDispatch();

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
        <p dangerouslySetInnerHTML={{ __html: props.body }}></p>
        <Link to="/challenge">

          <button
            className="btn btn-primary"
            onClick={() => {
              dispatch(addChallenge(props));
            }}
          >
            Train
          </button>
        </Link>
      </div>
    </div>
  );
}
