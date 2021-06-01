import React from "react";
import Challenge from "./challenge_block/ChallengeBlock.jsx";
import BrowsePanel from "./browse_panel/BrowsePanel.jsx";

import store from "../../../redux/store";
import { changeChallenge } from "../../../redux/actionCreator";

export default function ChallengePageBrowsePage() {
  const change = () => {
    console.log("prev state: ", store.getState());
    store.dispatch(changeChallenge("some new challenge"));

    console.log("after change state:", store.getState());
  };

  return (
    <div>
      <div className="container">
        <button onClick={change}>{store.getState().payload.challenge}</button>
        <div className="row">
          <div className="col col-md-4">
            <BrowsePanel />
          </div>
          <div className="col col-md-8">
            <Challenge />
            <Challenge />
            <Challenge />
          </div>
        </div>
      </div>
    </div>
  );
}
