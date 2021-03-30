'use strict';
import React, { useState, useEffect } from "react";

import parse from "html-react-parser";


import "mathlive";
import { MathfieldComponent } from "react-mathlive";
import mathlive from "mathlive";

const tex = `\int ^{\infty}_05xn=36`;
//CSS
import "../styles/challange-creator.scss";
import { convertLatexToMarkup, convertLatexToMathMl } from "mathlive";

export default function ChallengeCreator() {
  const [latex, setLatex] = React.useState("f(x)=\\log _10 x");

  const [challenge, setChallenge] = useState("");
  const [formula, setFormula] = useState({});

  const [data, setData] = useState("")

  // setChallenge(data.challenge.body);
useEffect(() => {
  fetchData();

}, [])

useEffect(() => {
  
  if(data === "") {
    console.log("Data didn't set");
    return
  }

  setChallenge(data.challenge.body.replace(/#f1;/g, `<div>${convertLatexToMarkup(data.challenge.formulas.formula1)}</div>`));


}, [data])


const fetchData = () => {
  fetch('http://localhost:8125/data.json')
  .then(response => response.json()).then(data => {
  
    setData(data);
  });
}
console.log(challenge);






    // useEffect(() => {
    //   setChallenge(() => {
    //     challenge.replace(/#f1;/g, data.challenge.formulas[0] )
    //   })
    // }, [challenge])

    
  

  return (
    <div className="challenge-creator-container">
      <div className="content">
        {/* <div>{parse(convertLatexToMarkup(latex))}</div> */}
        {parse(challenge)}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae earum
          consequuntur culpa. Eius, laborum. Laudantium exercitationem, sit ea
          reiciendis accusantium dignissimos adipisci soluta aspernatur! Nam
          deleniti architecto debitis ipsa veniam.
        </p>
      </div>

      <MathfieldComponent latex={latex} onChange={setLatex} />
    </div>
  );
}
//$$x^7+5x^3-3x^2+2x$$
