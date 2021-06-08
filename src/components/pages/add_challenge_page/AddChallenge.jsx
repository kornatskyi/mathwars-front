import React, { useState } from "react";
import "../../../../node_modules/guppy-js/guppy-default.min.css";
import "../../../../node_modules/guppy-js/guppy";

import "./add-challenge.scss";

/*
 *  Using CKEditor5 custom build with math Type plugin to create body of the challege.
 *  Docs of CKEditor5 look here https://ckeditor.com/docs/ckeditor5/latest/
 */
import FormComponent from "./form_component/FormComponent";

const hostName = "http://localhost:3000/newchallenge";

//redux add properties to props, not only that I added in parent component
function AddChallenge(props) {
  //Edditor initial state
  const [editorData, setEditorData] = useState(
    "<p>Write challenge body here...</p>"
  );
  const [file, setFile] = useState("no_file");

  /*this method will be execute inside Redux's handleSubmit method if 
  values pass all validation steps */
  const submit = (values) => {
    let formData = new FormData();

    const allData = { ...values, body: editorData, file: file };

    for (let key in allData) {
      if (key === "file" && allData[key] !== "no_file") {
        formData.append(key, allData[key], allData[key].name);
      } else {
        formData.append(key, allData[key]);
      }
    }

    console.log(formData);
    fetch(hostName, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.status !== 200) {
          // alert(response.statusText);
        }
        return response.text();
      })
      .then((text) => {
        console.log(text);
        // alert(text);
        location.reload();
      });
  };
  return (
    <div className="add-challenge-component container">
      <h3 className="page-description">On this page you can create a new challenges and send them to database</h3>
      <FormComponent
        onSubmit={submit}
        editorData={editorData}
        setEditorData={setEditorData}
        file={file}
        setFile={setFile}
      />
    </div>
  );
}

export default AddChallenge;
