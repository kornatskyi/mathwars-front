import {
  Button,
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import BrowsePage from "./components/pages/dashboard/BrowsePage.jsx";
import ChallengePage from "./components/pages/challenge_page/ChallengePage.jsx";
import Calculator from "./components/calculator/Calculator.js";
import LeftNavbar from "./components/left_navbar/LeftNavbar.jsx";
import AddChallenge from "./components/pages/add_challenge_page/AddChallenge.jsx";

import { useSelector, useDispatch } from 'react-redux'
import { addChallenge } from './redux/challengeSlice'


const App = () => {
  const challenge = useSelector(state => state.challenge.name)
  console.log(challenge);

  const dispatch = useDispatch()


  return (
    <div className="main-container">
      <div>Challenge: {challenge}</div>
      <button onClick={() => {
        dispatch(addChallenge("new challenge"))
      }}>Set challenge</button>
      <Router>
        <LeftNavbar />
        <Switch>
          <Route path="/search">
            <BrowsePage />
          </Route>
          <Route path="/challenge">
            <ChallengePage />
          </Route>
          <Route path="/addchallenge">
            <AddChallenge />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
