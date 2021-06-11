import React, { useEffect, useState } from "react";
import Challenge from "./challenge_block/ChallengeBlock.jsx";
import BrowsePanel from "./browse_panel/BrowsePanel.jsx";

// import { useSelector, useDispatch } from 'react-redux'
// import { addChallenge } from '../../../redux/challengeSlice'

import * as CONST from "../../../utils/constants";

export default function ChallengePageBrowsePage() {
  const [isLoading, setIsLoading] = useState(true);

  const [challenges, setChallenges] = useState([]);

  const [filter, setFilter] = useState({})


//fetching challenges from db 
  useEffect(() => {
    fetch(CONST.API_URL + "challenges", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }, // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify(filter), // body data type must match "Content-Type" header
    })
      .then((res) => res.text())
      .then((text) => {
        setChallenges(
          JSON.parse(text).map((challenge, i) => {
            console.log(challenge);
            return (
              <Challenge
                key={i}
                body={challenge.body}
                authorName={challenge.authorName}
                lvl={challenge.lvl}
                name={challenge.name}
                topics={challenge.topics}
                fileName={challenge.fileName}
                answer={challenge.answer}
              />
            );
          })
        );
        setIsLoading(false);
      });
  }, [filter]);

  if (isLoading) {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col col-lg-4">
              <BrowsePanel setFilter={setFilter} />
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
              <BrowsePanel setFilter={setFilter} setIsLoading={setIsLoading} />
            </div>
            <div className="col col-lg-8">{challenges}</div>
          </div>
        </div>
      </div>
    );
  }
}
