import React, { useEffect, useState } from "react";
import Challenge from "./challenge_block/ChallengeBlock.jsx";
import BrowsePanel from "./browse_panel/BrowsePanel.jsx";

// import { useSelector, useDispatch } from 'react-redux'
// import { addChallenge } from '../../../redux/challengeSlice'

import * as CONST from "../../../utils/constants";

export default function ChallengePageBrowsePage() {
  const [isLoading, setIsLoading] = useState(true);

  const [challenges, setChallenges] = useState([]);


//fetching challenges from db 
  useEffect(() => {
    fetch(CONST.API_URL + "challenges", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }, // *GET, POST, PUT, DELETE, etc.
      body: "", // body data type must match "Content-Type" header
    })
      .then((res) => res.text())
      .then((text) => {
        setChallenges(
          JSON.parse(text).map((challenge, i) => {
            return (
              <Challenge
                key={i}
                body={challenge.body}
                author={challenge.author}
                difficulty={challenge.difficulty}
                name={challenge.name}
                shortTask={challenge.shortTask}
                tags={challenge.tags}
                topics={challenge.topics}
                images={challenge.images}
                answer={challenge.answer}
              />
            );
          })
        );
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col col-lg-4">
              <BrowsePanel />
            </div>
            <div className="col col-lg-8">
              <h1>Data loading</h1>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col col-lg-4">
              <BrowsePanel />
            </div>
            <div className="col col-lg-8">{challenges}</div>
          </div>
        </div>
      </div>
    );
  }
}
