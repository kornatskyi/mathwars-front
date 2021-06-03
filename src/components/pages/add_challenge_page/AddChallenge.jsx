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

import { Field, reduxForm } from "redux-form";

// import {required} from './formValidation'

const required = (value) => (value ? undefined : "Required");
const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
const number = (value) =>
  value && isNaN(Number(value)) ? "Must be a number" : undefined;
const minValue = (min) => (value) =>
  value && value < min ? `Must be at least ${min}` : undefined;
const minValue18 = minValue(18);
const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
const tooOld = (value) =>
  value && value > 65 ? "You might be too old for this" : undefined;
const aol = (value) =>
  value && /.+@aol\.com/.test(value)
    ? "Really? You still use AOL for your email?"
    : undefined;

//form validator

function action(values) {
  console.log(values);
}

//redux add properties to props, not only that I added in parent component
function AddChallenge(props) {
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

  /*this method will be execute inside Redux's handleSubmit method if 
  values pass all validation steps */
  const submit = (values) => {
    // print the form values to the console
    console.log(values);
    alert();
  };

  console.log(props);

  return (
    <div className="add-challenge-component">
      <FormComponent onSubmit={submit} />
    </div>
  );
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span style={{ color: "red" }}>{error}</span>) ||
          (warning && <span style={{ color: "red" }}> {warning}</span>))}
    </div>
  </div>
);

function FormComponent(props) {
  const [editorData, setEditorData] = useState(
    "<p>Write challenge body here...</p>"
  );

  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Name />
      <MyCKEditor editorData={editorData} setEditorData={setEditorData} />
      <ShortTask />
      <Answer />
      <Image />
      <Topics />
      <Tags />
      <AuthorName />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

function Name(props) {
  return (
    <div className="name-input">
      <label htmlFor="name" className="form-label">
        Challenge name
      </label>
      <Field
        component={renderField}
        autoComplete="off"
        type="text"
        className="form-control"
        id="name"
        name="name"
        validate={required}
        warn={tooOld}
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
      <Field
        component="input"
        autoComplete="off"
        type="text"
        className="form-control"
        id="shortTask"
        name="shortTask"
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

      <Field
        component="input"
        autoComplete="off"
        type="text"
        className="form-control"
        id="answer"
        name="answer"
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
      {/* <Field
        component="input"
        autoComplete="off"
        type='file'
        accept='.jpg, .png, .jpeg'
        className="form-control"
        id="image"
        name="image"
      /> */}
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

      <Field
        component="input"
        autoComplete="off"
        type="text"
        className="form-control"
        id="topics"
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
      <Field
        component="input"
        autoComplete="off"
        type="text"
        className="form-control"
        id="tags"
        name="tags"
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
      <Field
        component="input"
        autoComplete="off"
        type="text"
        className="form-control"
        id="authorName"
        name="authorName"
      />
      <div id="authorHelp" className="form-text">
        name
      </div>
    </div>
  );
}

function MyCKEditor({ editorData, setEditorData }) {
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

FormComponent = reduxForm({
  // a unique name for the form
  form: "contact",
})(FormComponent);

export default AddChallenge;
