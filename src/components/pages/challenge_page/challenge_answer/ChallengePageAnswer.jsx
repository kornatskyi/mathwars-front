import React, { useState } from "react";
import "./challenge-page-answer.scss";
import { Link } from "react-router-dom";


export default function ChallengePageAnswer(props) {
  const [inputValue, setInputValue] = useState("");
  // const host = props.host;
  const [isCorrectAnswer, setIsCorrectAnswer] = useState('default');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };


  const checkAnswer = (answer, trueAnswer) => {
    if (answer === trueAnswer) {
      return true;
    } else {
      setTimeout(() => {
        setIsCorrectAnswer('default')
      }, 1000)
      return false;
    }
  };

  
  if (isCorrectAnswer === true) {
    return (
      <div className="challenge-page-answer-constainer">
        <div className="correct">
          <span> Your answer is correct.</span>
          <Link to="/browse" className="btn">
                Go next
            </Link>
        </div> 
      </div>
    );
  } else if (isCorrectAnswer === false) {
    return (
      <div className="challenge-page-answer-constainer">
      <form className="wrong">
        <label htmlFor="answer">
          <input
            id="answer"
            autoComplete="off"
            className="form-control"
            type="text"
            placeholder="Wrong answer"
            value=""
            onChange={handleChange}
          />
        </label>
        <button
          className="btn"
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
            className="btn"
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
