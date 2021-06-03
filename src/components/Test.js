import React from "react";
import { createStore, combineReducers } from "redux";
import { Field, reduxForm } from "redux-form";

import { useSelector, useDispatch } from "react-redux";
import { LocalForm, Control, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

function Test() {
  let state = useSelector((state) => state);

  function handleSubmit(values) {
    console.log(values);
  }
  return (
    <div>
      <LocalForm
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        <Field
          name="password"
          component="input"
          type="password"
          class="form-control"
          id="password"
        />

        <Control.text
          model=".author"
          id="author"
          name="author"
          placeholder="Your name"
          className="form-control"
          validators={{
            required,
            minLength: minLength(2),
            maxLength: maxLength(15),
          }}
        />
        <Errors
          className="text-danger"
          model=".author"
          show="touched"
          component="div"
          messages={{
            required: "Required",
            minLength: "Must be at least 2 characters",
            maxLength: "Must be 15 characters or less",
          }}
        />
        <label htmlFor="text">Comment</label>
        <button type="submit">Submit</button>
      </LocalForm>
    </div>
  );
}

Test = reduxForm({
  form: "editForm",
})(Test);

export default Test;
