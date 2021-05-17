import React, { useState, useEffect } from "react";
import ChallengePageAnswer from "../../components/ChallengePageAnswer.jsx";
import ChallengePageChallengeDescription from "../../components/ChallengePageChallengeDescription.jsx";
import ChallengePageDraft from "../../components/ChallengePageDraft.jsx";
import ChallengePageHeader from "../../components/ChallengePageHeader.jsx";
import ChallengePageToolsBar from "../../components/ChallengePageToolsBar.jsx";

const host = "http://127.0.0.1:3000/";
const resourseSpecificator = "data/challenge1/challenge1.json";
const url = host + resourseSpecificator;

export default function ChallengePage() {
  const challengeId = { id: 1 } || props.challengeId;

  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(0);
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [formulas, setFormulas] = useState("");
  const [shortTask, setShortTask] = useState("");
  const [answerType, setAnswerType] = useState("");
  const [images, setImages] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [author, setAuthor] = useState("");
  const [topics, setTopics] = useState("");
  const [tags, setTags] = useState("");

  //Fetch challenge data by id.
  useEffect(async () => {
    // const xhr = new XMLHttpRequest();
    // xhr.open("POST", "http://127.0.0.1:8125/challenge", true);
    // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // xhr.onload = function () {
    //   console.log(this.status);
    // };

    // xhr.send(JSON.stringify(challengeId));
    const response = await fetch(host + "challenge", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify(challengeId), // body data type must match "Content-Type" header
    })
      .then((response) => response.text())

    console.log(response);
    const data = JSON.parse(response)
    // console.log(data);
    // console.log("somthing");



    setText(data.body.text);
    setDate(data.date);
    setName(data.name);
    setFormulas(data.body.formulas);
    setShortTask(data.body.shortTask);
    setAnswerType(data.body.answerType);
    setImages(data.body.images);
    setDifficulty(data.difficulty);
    setAuthor(data.author);
    setTopics(data.topics);
    setTags(data.tags);
    setId(data.id);

    setLoading(false);
  }, []);
  return (
    <div className="challenge-page-container">
      <div className="container  d-flex h-100 flex-column">
        <div className="row">
          <div className="col col-12 mt-2 mb-2 pl-2 pr-0">
            <ChallengePageHeader
              date={date}
              name={name}
              difficulty={difficulty}
              author={author}
              topics={topics}
              tags={tags}
            />
          </div>
        </div>
        <div className="row  flex-fill ">
          <div className="col col-12 col-md-5 pl-2 pr-0 pb-2">
            <ChallengePageChallengeDescription
              loading={loading}
              name={name}
              text={text}
              formulas={formulas}
              shortTask={shortTask}
              images={images}
              host={host}
              answerType={answerType}
            />
          </div>
          <div className="col col-12 col-md-7 d-flex h-100 flex-column pl-2  pr-0 pb-2">
            <div className="row flex-fill mb-2">
              <div className="col col-12">
                <ChallengePageDraft />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col col-12">
                <ChallengePageToolsBar />
              </div>
            </div>
            <div className="row">
              <div className="col col-12">
                <ChallengePageAnswer challengeId={id} host={host} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}