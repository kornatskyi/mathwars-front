import React, { useState } from "react";
import "./challenge-page-draft.scss";

import Board from "../../../whiteboard/Board";

export default function ChallengePageDraft() {
  return (
    <div className="challenge-page-draft-container">
      <Board />
    </div>
  );
}
