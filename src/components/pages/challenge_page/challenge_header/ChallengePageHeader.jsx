import React from "react";
import authorIcon from "../../../../assets/images/challenge_data/challenge-author.svg";
import topicIcon from "../../../../assets/images/challenge_data/square-root-alt-solid.svg";
import "./challenge-page-header.scss";

export default function ChallengePageHeader(props) {

  console.log(props.tags);
  console.log(props.topics);
  return (
    <div className="challenge-page-header-constainer">
      <div className="left-header">
        <div className="main-info">
          <div className="lvl">
            <p>{props.difficulty}</p>
          </div>
          <div className="name">
            <h4>{props.name}</h4>
          </div>
        </div>

        <div className="additional-info">
          <div className="author-container">
            <img src={authorIcon} alt="challenge author" />
            <span>
              <a href="">{props.author}</a>
            </span>
          </div>
          <div className="tags">
            {props.tags.split(" ").map((tag, i) => (
              <div key={i}>
                <a href="">{tag}</a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="right-header">
        {props.topics.split(" ").map((topicName, i) =>  (
            <div className="topic-element" key={i}>
            <img src={topicIcon} alt="math topic" />
            <span>{topicName}</span>
          </div>
        ))}
      

      </div>
    </div>
  );
}
