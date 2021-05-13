import React from "react";
import authorIcon from "../assets/images/challenge_data/challenge-author.svg";

export default function ChallengePageHeader(props) {
  return (
    <div className="challenge-page-header-constainer">
      <div className="left-header">
        <div className="main-info">
          <div className="lvl">{props.difficulty}</div>
          <div className="name">
            <h4>{props.name}</h4>
          </div>
        </div>

        <div className="additional-info">
          <div className="author-container">
            <img src={authorIcon} alt="challenge author" />
            <span>{props.author}</span>
          </div>
          <div className="tags">
            {Object.values(props.tags).map((tag, i) => (
              <div key={i}>
                <a href="">{tag}</a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="right-header">
        <h6>Topics included</h6>
        <span></span>
        <span>Geometry 1</span>
        <span>Equations</span>
      </div>
    </div>
  );
}
