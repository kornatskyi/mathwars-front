import React, { useState } from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "../../../../../ckeditor5/build/ckeditor";

import { Field, reduxForm } from "redux-form";
import { required, maxLength30 } from "../formValidation";

function FormComponent(props) {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Name />
      <MyCKEditor
        editorData={props.editorData}
        setEditorData={props.setEditorData}
      />
      <ShortTask />
      <Answer />
      <Image file={props.file} setFile={props.setFile} />
      <Topics />
      <Tags />
      <AuthorName />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched &&
          ((error && <span className="error">{error}</span>) ||
            (warning && <span className="warning"> {warning}</span>))}
      </div>
    </div>
  );
};

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
function Image({ file, setFile }) {
  return (
    <div className="image-input">
      <label htmlFor="image" className="form-label">
        Immage for the challenge
      </label>
      <input
        className="file-attachment"
        name="image"
        type="file"
        id="image"
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      />
    </div>
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
        validate={[required, maxLength30]}
        warn={required}
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
        component={renderField}
        autoComplete="off"
        type="text"
        className="form-control"
        id="shortTask"
        name="shortTask"
        validate={[required, maxLength30]}
        warn={required}
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
        component={renderField}
        autoComplete="off"
        type="text"
        className="form-control"
        id="answer"
        name="answer"
        validate={[required]}
        warn={required}
      />
      <div id="answerHelp" className="form-text">
        Write answer here
      </div>
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
        component={renderField}
        autoComplete="off"
        type="text"
        className="form-control"
        id="topics"
        name="topics"
        validate={required}
        warn={required}
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
        component={renderField}
        autoComplete="off"
        type="text"
        className="form-control"
        id="tags"
        name="tags"
        validate={required}
        warn={required}
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
        component={renderField}
        autoComplete="off"
        type="text"
        className="form-control"
        id="authorName"
        name="authorName"
        validate={required}
        warn={required}
      />
      <div id="authorHelp" className="form-text">
        name
      </div>
    </div>
  );
}

FormComponent = reduxForm({
  // a unique name for the form
  form: "contact",
})(FormComponent);

export default FormComponent;
