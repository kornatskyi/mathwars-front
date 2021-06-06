import React from "react";
import "./challenge-block.scss";

import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { addChallenge } from "../../../../redux/challengeSlice";

import MathJax from "react-mathjax-preview";

export default function ChallengeBlock(props) {

  const dispatch = useDispatch();

  return (
    <div className="challenge-container">
      <div className="left-column">
        <div className="header">
          <div className="lvl">{props.difficulty}</div>
        </div>
        <div className="meta-data">
          <span>Author: {props.author}</span>
          <ul>
            Topics:
            {props.topics.split(" ").map((topic, i) => (
              <li key={i}>{topic}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="right-column">
        <div>
          <div className="name">
            <h4>{props.name}</h4>
          </div>
          {/* <p dangerouslySetInnerHTML={{ __html: props.body }}></p> */}
          <MathJax math={props.body} />
        </div>
        

        <Link to="/challenge">
          <button
            className="train-btn"
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
