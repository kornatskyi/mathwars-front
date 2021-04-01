'use strict';
import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import "mathlive";
import { MathfieldComponent } from "react-mathlive";
import mathlive from "mathlive";
import { convertLatexToMarkup, convertLatexToMathMl } from "mathlive";


//CSS
import '../styles/challenge.scss'

export default function Challenge(props) {

   console.log("Data in resived in challenge: " + props.data);

  return (
    <div className="challenge-container">
      <div className="challenge-info">
        <div className="challenge-name">{props.data.name}</div>
        <div className="challenge-lvl">{props.data.difficulties}</div>
        <div className="status">{props.data.status}</div>
        <div className="author">{props.data.author}</div>
        <div className="date">{props.data.date}</div>
        <div className="topics">
        {Object.values(props.data.topics).map((topic) => `<p>${topic}</p>`)}
            </div>
      </div>
      <div className="challenge-description">
          <h2>{props.data.name}</h2>
          <p>{props.data.body.text}</p>
      </div>
    </div>
  );
}
