import React from "react";

const hostName = "http://localhost:3000/newchallenge"

export default function AddChallenge() {
  const validateForm = () => {

    const form = document.querySelector(".form");
    var formData = new FormData(form);
    fetch(hostName, {
        method:"POST",
        body: formData
    })
  };


  return (
    <div className="add-challenge-component">
      <button onClick={validateForm} className="btn btn-primary">
        Submit
      </button>
      <form className="form" action={hostName} method="POST">
        <div className="mb-3">
          <label htmlFor="challengeName" className="form-label">
            Challenge name
          </label>
          <input
            type="text"
            className="form-control"
            id="challengeName"
            name="name"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Body of a challenge
          </label>
          <textarea
            className="form-control"
            id="body"
            rows="3"
            name="body"
          ></textarea>
          <div id="bodyInputHelp" className="form-text">
            All formulas write in MathML format
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="shortTask" className="form-label">
            Task short form
          </label>
          <input
            name="shortTask"
            type="text"
            className="form-control"
            id="shortTask"
          />
          <div id="taskHelp" className="form-text">
            Explain what to find in short form
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="answer" className="form-label">
            Answer
          </label>
          <input
            type="text"
            name="answer"
            className="form-control"
            id="answer"
          />
          <div id="answerHelp" className="form-text">
            Write answer here
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Immage for the challenge
          </label>
          <input
            className="form-control"
            name="imageName"
            type="file"
            id="formFile"
          />
        </div>

        <div>
          <label htmlFor="topics" className="form-label">
            Topics
          </label>
          <input
            className="form-control"
            list="datalistOptions"
            id="topics"
            placeholder="Type to search..."
            name="topics"
          />
          <datalist id="datalistOptions">
            <option value="Algebra"></option>
            <option value="Calculus"></option>
            <option value="Geometry"></option>
          </datalist>
          <div id="topicsHelp" className="form-text">
            input topics
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags
          </label>
          <input type="text" name="tags" className="form-control" id="tags" />
          <div id="tagsHelp" className="form-text">
            Write tags separate by spases
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="authorName" className="form-label">
            Author Name
          </label>
          <input type="text" name="authorName" className="form-control" id="authorName" />
          <div id="tagsHelp" className="form-text">
            name
          </div>
        </div>
      </form>
    </div>
  );
}
