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
 
  

  return (
    <div className="challenge-creator-container">
      <div className="content">
       

      </div>

    </div>
  );
}
//$$x^7+5x^3-3x^2+2x$$
