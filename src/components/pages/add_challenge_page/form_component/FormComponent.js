import React, { useState } from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "../../../../../ckeditor5/build/ckeditor";

import { Field, reduxForm } from "redux-form";
import { required, maxLength30 } from "../formValidation";

function FormComponent(props) {
  const { handleSubmit } = props;
  console.log(props);

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <Name />
      <MyCKEditor
        editorData={props.editorData}
        setEditorData={props.setEditorData}
      />
      {/* <ShortTask /> */}
      <Answer />
      <Lvl/>
      <Topics />
      {/* <Tags /> */}
      <AuthorName />
      <Image file={props.file} setFile={props.setFile} />
      <button type="submit" className="submit-bnt">
        Submit
      </button>
    </form>
  );
}

export const renderField = ({
  input,
  label,
  type,
  placeholder,
  meta: { touched, error, warning },
}) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={placeholder} type={type} />
        {touched &&
          ((error && <span className="error">{error}</span>) ||
            (warning && <span className="warning"> {warning}</span>))}
      </div>
    </div>
  );
};



function MyCKEditor({ editorData, setEditorData }) {
  return (
    <div className="ckeditor form-element">
      <label>Challege body</label>
      <div className="ckeditor-container">
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
    </div>
  );
}
function Image({ file, setFile }) {
  return (
    <div className="image-input form-element">
      <label htmlFor="image" className="form-label">
        Add an image
      </label>
      <input
        className="file-attachment"
        name="image"
        type="file"
        id="image"
        onChange={(e) => {
          setFile(e.target.files[0] || "NO file");
        }}
      />
      <span>{file.name || file}</span>
    </div>
  );
}

function Name(props) {
  return (
    <div className="name-input form-element">
      <Field
        component={renderField}
        autoComplete="off"
        type="text"
        className="form-control"
        id="name"
        name="name"
        label="Challenge name"
        placeholder="Input challenge name here..."
        validate={[required, maxLength30]}
        warn={required}
      />
    </div>
  );
}

// function ShortTask(props) {
//   return (
//     <div className="short-task-input form-element">
//       <Field
//         component={renderField}
//         autoComplete="off"
//         type="text"
//         className="form-control"
//         id="shortTask"
//         name="shortTask"
//         label="Short Task"
//         placeholder="Short task max 30 char.."
//         validate={[required, maxLength30]}
//         warn={required}
//       />
//     </div>
//   );
// }
function Answer(props) {
  return (
    <div className="answer-input form-element">
      <Field
        component={renderField}
        autoComplete="off"
        type="text"
        className="form-control"
        id="answer"
        name="answer"
        label="Answer"
        placeholder="Answer..."
        validate={[required]}
        warn={required}
      />
    </div>
  );
}

export const renderSelectField = ({
  label,
  input,
  placeholder,
  meta: { touched, error, warning },
}) => {
  return (
    <div>
      <label>{label}</label>
      <div>

        <select {...input} placeholder={placeholder}>
          <option default value=' '>Default value</option>
          <option value="calculus">Calculus</option>
          <option value="algebra">Algebra</option>
          <option value="geometry">Geometry</option>
          <option value="arithmetics">Arithmetics</option>
        </select>

        {touched &&
          ((error && <span className="error">{error}</span>) ||
            (warning && <span className="warning"> {warning}</span>))}
      </div>
    </div>
  );
};

function Topics(props) {
  return (
    <div className="topics-input form-element">
      <Field
        component={renderSelectField}
        autoComplete="off"
        className="form-control"
        id="topics"
        name="topics"
        label="Topic"
        placeholder="Input math topic .."
      // validate={required}
      // warn={required}
      />
    </div>
  );
}

export const renderLvlField = ({
  label,
  input,
  placeholder,
  meta: { touched, error, warning },
}) => {
  return (
    <div>
      <label>{label}</label>
      <div>

        <select {...input} placeholder={placeholder}>
          <option default value=' '>Select dificuly</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>

        {touched &&
          ((error && <span className="error">{error}</span>) ||
            (warning && <span className="warning"> {warning}</span>))}
      </div>
    </div>
  );
};

function Lvl(props) {
  return (
    <div className="topics-input form-element">
      <Field
        component={renderLvlField}
        autoComplete="off"
        className="form-control"
        id="lvl"
        name="lvl"
        label="Lvl"
        placeholder="Choose dificulty lvl from 1 to 6"
      // validate={required}
      // warn={required}
      />
    </div>
  );
}
// function Tags(props) {
//   return (
//     <div className="tags-input form-element">
//       <Field
//         component={renderField}
//         autoComplete="off"
//         type="text"
//         className="form-control"
//         id="tags"
//         name="tags"
//         label="Tags"
//         placeholder="Input tags devided with space .."
//         validate={required}
//         warn={required}
//       />
//     </div>
//   );
// }
function AuthorName(props) {
  return (
    <div className="author-name-input form-element">
      <Field
        component={renderField}
        autoComplete="off"
        type="text"
        className="form-control"
        id="authorName"
        name="authorName"
        label="Author Name"
        placeholder="Input your name..."
        validate={required}
        warn={required}
      />
    </div>
  );
}

FormComponent = reduxForm({
  // a unique name for the form
  form: "contact",
})(FormComponent);

export default FormComponent;
