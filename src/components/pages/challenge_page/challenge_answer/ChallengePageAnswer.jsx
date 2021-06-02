import React, { useState } from "react";
import "./challenge-page-answer.scss";

export default function ChallengePageAnswer(props) {
  const [inputValue, setInputValue] = useState("");
  // const host = props.host;

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const checkAnswer = (answer, trueAnswer) =>
    answer === trueAnswer ? true : false;

  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  // const sendChallengeAnswerToTheServer = (challengeId, value, host) => {
  //   const options = {
  //     method: "POST", // *GET, POST, PUT, DELETE, etc.
  //     headers: {
  //       'Content-Type': 'application/json'
  //       // 'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     body: JSON.stringify({
  //       id: challengeId,
  //       answer: value,
  //     }),
  //   };

  //   fetch(host + "answer", options).then((response) => {
  //     return response.text().then((text) => {
  //       console.log(text);
  //       setIsCorrectAnswer(() => {
  //         return text === "true";
  //       });
  //       console.log(isCorrectAnswer);
  //     });
  //   });
  // };

  if (isCorrectAnswer) {
    return (
      <div className="challenge-page-answer-constainer">
        <div className="correct">
          <span> Your answer is correct.</span>
          <a className="btn btn-primary">Go next</a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="challenge-page-answer-constainer">
        <form>
          <label htmlFor="answer">
            <input
              id="answer"
              autoComplete="off"
              className="form-control"
              type="text"
              placeholder="Your answer here..."
              onChange={handleChange}
            />
          </label>
          <button
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              setIsCorrectAnswer(checkAnswer(inputValue, props.answer));
            }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
