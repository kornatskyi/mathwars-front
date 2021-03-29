import React from "react";
import parse from "html-react-parser";

import "mathlive";
import { MathfieldComponent } from "react-mathlive";

const tex = `\int ^{\infty}_05xn=36`;
//CSS
import "../styles/challange-creator.scss";
import { convertLatexToMarkup, convertLatexToMathMl } from "mathlive";

export default function ChallengeCreator() {
  const [latex, setLatex] = React.useState("f(x)=\\log _10 x");

  return (
    <div className="challenge-creator-container">
      <div className="content">
        <div>{parse(convertLatexToMarkup(latex))}</div>
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
