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

import BrowsePage from "./components/pages/browse_page/BrowsePage.jsx";
import ChallengePage from "./components/pages/challenge_page/ChallengePage.jsx";
import Calculator from "./components/calculator/Calculator.js";
import LeftNavbar from "./components/left_navbar/LeftNavbar.jsx";
import AddChallenge from "./components/pages/add_challenge_page/AddChallenge.jsx";
import HomePage from './components/pages/home_page/HomePage'

import Test from './components/Test'


const App = (props) => {

  return (
    <div className="main-container">

      <Router>
        <LeftNavbar />
        <Switch>
          <Route path="/browse">
            <BrowsePage />
          </Route>
          <Route path="/resourses">
            <Test/>
          </Route>
          <Route path="/addchallenge">
            <AddChallenge />
          </Route>
          <Route path="/challenge">
            <ChallengePage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
