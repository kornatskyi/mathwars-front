import React from "react";
import authorIcon from "../../../../assets/images/challenge_data/challenge-author.svg";
import topicIcon from "../../../../assets/images/challenge_data/square-root-alt-solid.svg";
import "./challenge-page-header.scss";

export default function ChallengePageHeader(props) {
  return (
    <div className="challenge-page-header-constainer">
      <div className="left-header">
        <div className="main-info">
          <div className="lvl">
            <p>{props.lvl}</p>
          </div>
          <div className="name">
            <h4>{props.name}</h4>
          </div>
        </div>

        <div className="additional-info">
          <div className="author-container">
            <img src={authorIcon} alt="challenge author" />
            <span>
              <a href="">{props.authorName}</a>
            </span>
          </div>
        </div>
      </div>

      <div className="right-header">
        {props.topics.split(" ").map((topicName, i) => (
          <div className="topic-element" key={i}>
            <img src={topicIcon} alt="math topic" />
            <span>{topicName}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
