import React from "react";
import "./challenge-page-challenge-description.scss";

//This is working for some reason I should make something more consistent to display math formulas
import MathJax from "react-mathjax-preview";

const latex = "`\\text { Simplify the radical } \\sqrt{147} \\text { to the simplest form. }`";
// const asciimath = '`int(t^(2)-(5)/(2t)+3sin(2t)-cos(t)-2)dt.`'
// const asciimath = "` Simplify the radical 'sqrt(147)' to the simplest form.`"
const asciimath = "`\" Simplify the radical \"sqrt(147)\" to the simplest form.\"`"

const mathMl = "<math><mtext>\u00a0Simplify the radical\u00a0</mtext><msqrt><mrow><mn>147</mn></mrow></msqrt><mtext>\u00a0to the simplest form.\u00a0</mtext></math>"

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
        {/* <MathJax math={props.body} /> */}
        <MathJax math={mathMl} />
        <img src={props.host + props.images} alt="" />

        <div className="to-find">To find: {props.shortTask}</div>
      </div>
    );
  }
}
