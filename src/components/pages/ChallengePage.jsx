import React from "react";
import ChallengePageAnswer from "../../components/ChallengePageAnswer.jsx";
import ChallengePageChallengeDescription from "../../components/ChallengePageChallengeDescription.jsx";
import ChallengePageDraft from "../../components/ChallengePageDraft.jsx";
import ChallengePageHeader from "../../components/ChallengePageHeader.jsx";
import ChallengePageToolsBar from "../../components/ChallengePageToolsBar.jsx";

export default function ChallengePage() {
  return (
    <div className="challenge-page-container">
      <div className="container  d-flex h-100 flex-column">
        <div className="row">
          <div className="col col-12 mt-2 mb-2">
            <ChallengePageHeader />
          </div>
        </div>
        <div className="row  flex-fill mb-2">
          <div className="col col-5 pr-1">
            <ChallengePageChallengeDescription />
          </div>
          <div className="col col-7 d-flex h-100 flex-column pl-1">
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
                <ChallengePageAnswer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
