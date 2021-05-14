import React, { useState } from "react";

export default function ChallengePageAnswer(props) {
  const [inputValue, setInputValue] = useState("");
  const host = props.host;

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const sendChallengeAnswerToTheServer = (challengeId, value, host) => {
    const options = {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify({
        id: challengeId,
        answer: value,
      }),
    };

    fetch(host + "answer", options).then((response) => {
      return response.text().then((text) => {
        console.log(text);
      });
    });
  };

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
            sendChallengeAnswerToTheServer(props.challengeId, inputValue, host);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
