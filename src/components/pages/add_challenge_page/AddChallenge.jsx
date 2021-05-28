import React from "react";
import "../../../../node_modules/guppy-js/guppy-default.min.css";
import "../../../../node_modules/guppy-js/guppy";

import "./add-challenge.scss";

/*
 *  Using CKEditor5 custom build with math Type plugin to create body of the challege.
 *  Docs of CKEditor5 look here https://ckeditor.com/docs/ckeditor5/latest/
 */
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "../../../../ckeditor5/build/ckeditor";

const hostName = "http://localhost:3000/newchallenge";

export default function AddChallenge() {
  const validateForm = () => {
    const form = document.querySelector(".form");
    var formData = new FormData(form);
    fetch(hostName, {
      method: "POST",
      body: formData,
    });
  };

  return (
    <div className="add-challenge-component">
      <div className="container">
        <form className="form row" action={hostName} method="POST">
          <div className="col">
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
                Body of a challenge
              <div className="ckeditor">
                <CKEditor
                  editor={Editor}
                  data="<p>Hello from CKEditor 5!</p>"
                  config={{
                    plugins: [
                      "Autoformat",
                      "BlockQuote",
                      "Bold",
                      "CloudServices",
                      "Essentials",
                      "Heading",
                      "Indent",
                      "Italic",
                      "Link",
                      "List",
                      "MathType",
                      "Paragraph",
                      "PasteFromOffice",
                      "SpecialCharacters",
                      "SpecialCharactersMathematical",
                      "Table",
                      "TableToolbar",
                      "TextTransformation",
                    ],
                    toolbar: [
                      "heading",
                      "|",
                      "bold",
                      "italic",
                      "link",
                      "bulletedList",
                      "numberedList",
                      "|",
                      "outdent",
                      "indent",
                      "|",
                      "blockQuote",
                      "insertTable",
                      "undo",
                      "redo",
                      "specialCharacters",
                      "MathType",

                      // Chemestry input MathType plugin
                      // "ChemType",

                    ],
                  }}
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    console.log("Editor is ready to use!", editor);
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                  }}
                  onBlur={(event, editor) => {
                    console.log("Blur.", editor);
                  }}
                  onFocus={(event, editor) => {
                    console.log("Focus.", editor);
                  }}
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="formula" className="form-label">
                Formula
              </label>
              <input
                name="formula"
                type="text"
                className="form-control"
                id="formula"
              />
              <div id="formulaHelp" className="form-text">
                Add formula in MathML format
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
          </div>

          <div className="col-sm-5">
            {" "}
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
              <input
                type="text"
                name="tags"
                className="form-control"
                id="tags"
              />
              <div id="tagsHelp" className="form-text">
                Write tags separate by spases
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="authorName" className="form-label">
                Author Name
              </label>
              <input
                type="text"
                name="authorName"
                className="form-control"
                id="authorName"
              />
              <div id="tagsHelp" className="form-text">
                name
              </div>
            </div>
            <button onClick={validateForm} className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
