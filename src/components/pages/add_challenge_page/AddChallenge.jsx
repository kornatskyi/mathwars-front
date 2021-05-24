import React from "react";

export default function AddChallenge() {
  const validateForm = () => {

    const form = document.querySelector(".form");
    console.dir(form.challenge.value);
    console.dir(form.body.value);
    console.dir(form.task.value);
    console.dir(form.answer.value);
    console.dir(form.file.value);
    console.dir(form.topics.value);
    console.dir(form.tags.value);

    const challenge = {
      _id: "609dca28aae3ac406a83d46e",
      id: 1,
      date: "03/31/2021",
      name: form.challenge.value,
      body: {
        text: form.body.value,
        formulas: {
          formula1:
            '<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>a</mi><mo>&#xA0;</mo><mo>=</mo><mo>&#xA0;</mo><mn>8</mn><mo>,</mo><mo>&#xA0;</mo><mi>b</mi><mo>&#xA0;</mo><mo>=</mo><mo>&#xA0;</mo><mn>15</mn></math>',
        },
        shortTask: form.task.value,
        answerType: "number",
        answer: form.answer.value,
        images: "triangle.png",
        graphs: "false",
      },
      difficulty: 2,
      author: "Author Name",
      topics: form.topics.value,
      tags: form.tags.value,
    };

    console.log(challenge);
  };
  return (
    <div className="add-challenge-component">
      <button onClick={validateForm} className="btn btn-primary">
        Submit
      </button>
      <form className="form" action="#" method="POST">
        <div className="mb-3">
          <label htmlFor="challengeName" className="form-label">
            Challenge name
          </label>
          <input
            type="text"
            className="form-control"
            id="challengeName"
            name="challenge"
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
            name="task"
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
            name="file"
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
      </form>
    </div>
  );
}
