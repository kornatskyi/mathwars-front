import React from "react";
import './board.scss'
import WhiteBoard from "./whiteBoard";
import Tools from "./tools";
import History from "./history";

export default function Board() {
  return (
    <div>
      <div id="container">
        <Tools />
        <WhiteBoard />
      </div>
      <History />
    </div>
  );
}
