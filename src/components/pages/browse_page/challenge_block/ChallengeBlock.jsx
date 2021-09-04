import React from "react";
import "./challenge-block.scss";

import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { addChallenge } from "../../../../redux/challengeSlice";

// import MathJax from "react-mathjax-preview";

// import MathJ from "https://cdn.jsdelivr.net/npm/mathjax@2/MathJax.js?config=TeX-AMS-MML_CHTML"

// console.log('====================================');
// console.log(MathJ);
// console.log('====================================');

export default function ChallengeBlock(props) {
  const dispatch = useDispatch();

  return (
    <div className="challenge-container">
      <div className="left-column">
        <div className="header">
          <div className="lvl">{props.lvl}</div>
        </div>
        <div className="meta-data">
          <span>Author: {props.authorName}</span>
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
          <div dangerouslySetInnerHTML={{ __html: props.body }}></div>
 
<button style={{width: 50, height: 30}} onClick={() => {
 MathJax.typeset()
}}>click</button>
         
          <div className="math-block">
            {/* {props.body} */}
            {/* <MathJax style={{outerWidth:300}} math={props.body} /> */}
          </div>
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
