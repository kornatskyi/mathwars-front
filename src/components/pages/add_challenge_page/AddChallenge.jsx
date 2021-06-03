import React, { useState } from "react";
import "../../../../node_modules/guppy-js/guppy-default.min.css";
import "../../../../node_modules/guppy-js/guppy";

import "./add-challenge.scss";

/*
 *  Using CKEditor5 custom build with math Type plugin to create body of the challege.
 *  Docs of CKEditor5 look here https://ckeditor.com/docs/ckeditor5/latest/
 */
import FormComponent from './form_component/FormComponent'

const hostName = "http://localhost:3000/newchallenge";





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




export default AddChallenge;
