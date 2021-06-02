import ReactDOM from "react-dom";
import React from "react";
import "./styles/style.scss";
import "./index.css";
import App from "./App.js";

//Fonts
import "./assets/fonts/Roboto/Roboto-Regular.ttf";
import "./assets/fonts/Roboto/Roboto-Bold.ttf";
import "./assets/fonts/Roboto/Roboto-Light.ttf";
import "./assets/fonts/Roboto/Roboto-Italic.ttf";
import "./assets/Asana-Math/Asana-Math.otf";

import store from "./redux/store";
import { Provider } from "react-redux";
import { addChallenge } from "./redux/challengeSlice";

import { loadState, saveState } from "./redux/localStorage";

//Save data to local storage to prevert data lose after page refreshing
const loadedState = loadState();
store.dispatch(addChallenge(loadedState));
store.subscribe(() => {
  saveState(store.getState().challenge);
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
