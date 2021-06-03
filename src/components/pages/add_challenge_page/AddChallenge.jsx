import React, { useState } from "react";
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
  const [editorData, setEditorData] = useState(
    "<p>Write challenge body here...</p>"
  );

  const validateForm = () => {
    const name = document.getElementById("name");
    const shortTask = document.getElementById("shortTask");
    const answer = document.getElementById("answer");
    const image = document.getElementById("image");
    const topics = document.getElementById("topics");
    const tags = document.getElementById("tags");
    const authorName = document.getElementById("authorName");

    var myFormData = new FormData();

    myFormData.append("name", name.value);
    myFormData.append("body", editorData);
    myFormData.append("shortTask", shortTask.value);
    myFormData.append("answer", answer.value);

    myFormData.append("topics", topics.value);
    myFormData.append("tags", tags.value);
    myFormData.append("authorName", authorName.value);
    console.log("myFormData");

    if (!!image.value) {
      try {
        myFormData.append(
          "image",
          document.getElementById("image").files[0],
          document.getElementById("image").files[0].name
        );
      } catch {
        console.warn("Some problems with image atachment");
      }
    }

    fetch(hostName, {
      method: "POST",
      body: myFormData,
    })
      .then((response) => {
        if (response.status !== 200) {
          alert(response.statusText);
        }
        return response.text();
      })
      .then((text) => {
        alert(text);
        location.reload();
      });
  };

  return (
    <div className="add-challenge-component">

        <Name />
        <MyCKEditor editorData={editorData} setEditorData={setEditorData}/>

        <ShortTask />
        <Answer />
        <Image />
        <Topics />
        <Tags />
        <button onClick={validateForm} className="btn btn-primary">
          Submit
        </button>
    </div>
  );
}

function Name(props) {
  return (
    <div className="name-input">
      <label htmlFor="name" className="form-label">
        Challenge name
      </label>
      <input
        autoComplete="off"
        type="text"
        className="form-control"
        id="name"
        name="name"
        aria-describedby="emailHelp"
      />
      <div id="emailHelp" className="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
  );
}

function ShortTask(props) {
  return (
    <div className="short-task-input">
      <label htmlFor="shortTask" className="form-label">
        Task short form
      </label>
      <input
        autoComplete="off"
        name="shortTask"
        type="text"
        className="form-control"
        id="shortTask"
      />
      <div id="taskHelp" className="form-text">
        Explain what to find in short form
      </div>
    </div>
  );
}
function Answer(props) {
  return (
    <div className="answer-input">
      <label htmlFor="answer" className="form-label">
        Answer
      </label>
      <input
        autoComplete="off"
        type="text"
        name="answer"
        className="form-control"
        id="answer"
      />
      <div id="answerHelp" className="form-text">
        Write answer here
      </div>
    </div>
  );
}
function Image(props) {
  return (
    <div className="image-input">
      <label htmlFor="image" className="form-label">
        Immage for the challenge
      </label>
      <input className="file-attachment" name="image" type="file" id="image" />
    </div>
  );
}
function Topics(props) {
  return (
    <div className="topics-input">
      <label htmlFor="topics" className="form-label">
        Topics
      </label>
      <input
        autoComplete="off"
        className="form-control"
        id="topics"
        placeholder="Type to search..."
        name="topics"
      />
      <div id="topicsHelp" className="form-text">
        input topics
      </div>
    </div>
  );
}
function Tags(props) {
  return (
    <div className="tags-input">
      <label htmlFor="tags" className="form-label">
        Tags
      </label>
      <input
        autoComplete="off"
        type="text"
        name="tags"
        className="form-control"
        id="tags"
      />
      <div id="tagsHelp" className="form-text">
        Write tags separate by spases
      </div>
    </div>
  );
}
function AuthorName(props) {
  return (
    <div className="author-name-input">
      <label htmlFor="authorName" className="form-label">
        Author Name
      </label>
      <input
        autoComplete="off"
        type="text"
        name="authorName"
        className="form-control"
        id="authorName"
      />
      <div id="authorHelp" className="form-text">
        name
      </div>
    </div>
  );
}

function MyCKEditor({editorData, setEditorData}) {
  return (
    <div className="ckeditor">
      <CKEditor
        editor={Editor}
        data={editorData}
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
        onChange={(event, editor) => {
          const data = editor.getData();
          setEditorData(data);
        }}
      />
    </div>
  );
}
