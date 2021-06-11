import React from "react";
import "./challenge-page-challenge-description.scss";

//This is working for some reason I should make something more consistent to display math formulas
import MathJax from "react-mathjax-preview";

const latex =
  "`\\text { Simplify the radical } \\sqrt{147} \\text { to the simplest form. }`";
// const asciimath = '`int(t^(2)-(5)/(2t)+3sin(2t)-cos(t)-2)dt.`'
// const asciimath = "` Simplify the radical 'sqrt(147)' to the simplest form.`"
const asciimath = '`" Simplify the radical "sqrt(147)" to the simplest form."`';

const mathMl =
  "<math><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>(</mo><mn>9</mn><mi>ln</mi><mo>(</mo><msqrt><mrow><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>9</mn></mrow></msqrt><mo>+</mo><mn>2</mn><mi>x</mi><mo>)</mo><mo>+</mo><mn>2</mn><msqrt><mrow><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>9</mn></mrow></msqrt><mi>x</mi><mo>)</mo><mo>+</mo><mtext>\u00a0constant\u00a0</mtext></math>";
const mathml = `<p><math xmlns="http://www.w3.org/1998/Math/MathML"><mtable columnalign="left"><mtr><mtd><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>(</mo><mn>9</mn><mi>ln</mi><mfenced><mrow><msqrt><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>9</mn></msqrt><mo>+</mo><mn>2</mn><mi>x</mi></mrow></mfenced><mo>+</mo><mn>2</mn><msqrt><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>9</mn><mi>x</mi><mo>)</mo></msqrt><mo>&nbsp;</mo><mo>+</mo><mo>&nbsp;</mo><mi>c</mi><mi>o</mi><mi>n</mi><mi>s</mi><mi>tan</mi><mi>t</mi></mtd></mtr><mtr><mtd>&nbsp;</mtd></mtr></mtable></math></p>`;

export default function ChallengePageChallengeDescription(props) {
  if (props.loading) {
    return (
      <div className="challenge-page-challenge-description-constainer">
        <div>Waiting for challenge load...</div>
      </div>
    );
  } else {
    return (
      <div className="challenge-page-challenge-description-constainer">
        <h2>Task</h2>
        <MathJax math={props.body} />
        {/* <MathJax math={mathMl} /> */}
        <img src={props.host + props.fileName} alt="" />
      </div>
    );
  }
}
