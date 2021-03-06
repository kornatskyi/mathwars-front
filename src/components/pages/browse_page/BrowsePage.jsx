import React, { useEffect, useState } from "react";
import Challenge from "./challenge_block/ChallengeBlock.jsx";
import BrowsePanel from "./browse_panel/BrowsePanel.jsx";

// import { useSelector, useDispatch } from 'react-redux'
// import { addChallenge } from '../../../redux/challengeSlice'

import '../../../styles/spiner.scss'

import * as CONST from "../../../utils/constants";
console.log(CONST.API_URL);


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
            <div className="col-sm col-lg-8">
              <br />
              <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
              <h5>Challenges is loading...</h5> <p style={{color: 'grey'}}>Can take some time, because of Heroku Dynos keeps the server asleep due to rare using</p>
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
