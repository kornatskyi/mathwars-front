import React from "react";
import "./challenge-page-challenge-description.scss";

import * as CONST from "../../../../utils/constants";

//This is working for some reason I should make something more consistent to display math formulas
import MathJax from "react-mathjax-preview";
export default function ChallengePageChallengeDescription(props) {
  const { name, body, shortTask, fileName, host, answerType, answer } =
    props.challengeData;

  console.log(props.challengeData);
  return (
    <div className="challenge-page-challenge-description-constainer">
      <h2>Task</h2>
      <MathJax math={body} />
      {fileName ? <img src={CONST.API_URL + fileName} alt="" /> : <div></div>}
    </div>
  );
}
