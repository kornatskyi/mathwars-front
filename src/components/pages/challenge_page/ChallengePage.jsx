import React, { useState, useEffect } from "react";
import ChallengePageAnswer from "./challenge_answer/ChallengePageAnswer.jsx";
import ChallengePageChallengeDescription from "./challege_description/ChallengePageChallengeDescription.jsx";
import ChallengePageDraft from "./challenge_draft_board/ChallengePageDraft.jsx";
import ChallengePageHeader from "./challenge_header/ChallengePageHeader.jsx";
import ChallengePageToolsBar from "./challenge_tool_bar/ChallengePageToolsBar.jsx";
import "./challenge-page.scss";

import * as CONST from '../../../settings/constants'

import { useSelector, useDispatch } from "react-redux";
// import { addChallenge } from "../../../../redux/challengeSlice";


export default function ChallengePage() {
  const challenge = useSelector(state => state.challenge.data)

  console.log(challenge);
  
  return (
    <div className="challenge-page-container">
      <div className="calc-container"></div>
      <div className="container  d-flex h-100 flex-column">
        <div className="row">
          <div className="col col-12 mt-2 mb-2 pl-2 pr-0">
            <ChallengePageHeader
              date={challenge.date}
              name={challenge.name}
              difficulty={challenge.difficulty}
              author={challenge.author}
              topics={challenge.topics}
              tags={challenge.tags}
            />
          </div>
        </div>
        <div className="row  flex-fill ">
          <div className="col col-12 col-md-5 pl-2 pr-0 pb-2">
            <ChallengePageChallengeDescription
              loading={challenge.loading}
              name={challenge.name}
              body={challenge.body}
              shortTask={challenge.shortTask}
              images={challenge.images}
              host={CONST.API_HOST}
              answerType={challenge.answerType}
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
                <ChallengePageAnswer answer={challenge.answer} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
