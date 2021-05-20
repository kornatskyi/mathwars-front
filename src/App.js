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




const App = () => (
  <div>
    <Calculator/>
    {/* <Calculator /> */}
  </div>
)

export default App;