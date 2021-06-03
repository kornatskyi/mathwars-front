import React, { useState, useEffect } from "react";
import ChallengePageAnswer from "./challenge_answer/ChallengePageAnswer.jsx";
import ChallengePageChallengeDescription from "./challege_description/ChallengePageChallengeDescription.jsx";
import ChallengePageDraft from "./challenge_draft_board/ChallengePageDraft.jsx";
import ChallengePageHeader from "./challenge_header/ChallengePageHeader.jsx";
import ChallengePageToolsBar from "./challenge_tool_bar/ChallengePageToolsBar.jsx";
import "./challenge-page.scss";

import * as CONST from "../../../settings/constants";

import { useSelector, useDispatch } from "react-redux";
// import { addChallenge } from "../../../../redux/challengeSlice";

import { loadState } from "../../../redux/localStorage";

export default function ChallengePage() {
  //load challenge data from local storage
  const challengeData = loadState();

  return (
    <div className="challengeData-page-container">
      <div className="calc-container"></div>
      <div className="container  d-flex h-100 flex-column">
        <div className="row">
          <div className="col col-12 mt-2 mb-2 pl-2 pr-0">
            <ChallengePageHeader
              date={challengeData.date}
              name={challengeData.name}
              difficulty={challengeData.difficulty}
              author={challengeData.author}
              topics={challengeData.topics}
              tags={challengeData.tags}
            />
          </div>
        </div>
        <div className="row  flex-fill ">
          <div className="col col-12 col-md-5 pl-2 pr-0 pb-2">
            <ChallengePageChallengeDescription
              loading={challengeData.loading}
              name={challengeData.name}
              body={challengeData.body}
              shortTask={challengeData.shortTask}
              images={challengeData.images}
              host={CONST.API_HOST}
              answerType={challengeData.answerType}
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
                <ChallengePageAnswer answer={challengeData.answer} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
