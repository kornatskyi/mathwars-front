import React from "react";
import "./challenge-page-challenge-description.scss";

const Mathml2latex = require('mathml-to-latex');
const katex = require('katex');

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
        <p>{props.text}</p>
        <img src={props.host + props.images} alt="" />
        <div className="formula">
          <script
            defer
            type="text/javascript"
            src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"
          ></script>
          <span
            // dangerouslySetInnerHTML={{ __html: props.formulas["formula1"] }}
            dangerouslySetInnerHTML={{ __html: katex.renderToString(Mathml2latex.convert(props.formulas["formula1"])) }}
          ></span>
          {console.log(katex.renderToString(Mathml2latex.convert(props.formulas["formula1"])) )}
          
        </div>
  
       
        <div>To find: {props.shortTask}</div>
        <div>Answer format: {props.answerType} </div>
      </div>
    );
  }
}
