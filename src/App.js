import { Button, Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import BrowsePage from './components/pages/dashboard/BrowsePage.jsx'
import ChallengePage from './components/pages/challenge_page/ChallengePage.jsx'
import Calculator from './components/calculator/Calculator.js'
import LeftNavbar from './components/left_navbar/LeftNavbar.jsx'
import AddChallenge from './components/pages/add_challenge_page/AddChallenge.jsx'




const App = () => (
  <div className="main-container">
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
)

export default App;