import { Button, Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import BrowsePage from './components/pages/BrowsePage.jsx'
import ChallengePage from './components/pages/ChallengePage.jsx'
import LeftNavbar from './components/LeftNavbar.jsx'




const App = () => (
  <div>
    <LeftNavbar/>
    <ChallengePage />
  </div>
)

export default App;