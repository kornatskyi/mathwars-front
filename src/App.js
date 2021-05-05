import { Button, Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Challenge from './components/Challenge.jsx'
import SearchPanel from './components/SearchPanel.jsx'
import ChallengePage from './components/ChallengePage.jsx'




const App = () => (
  <div>


    <div className="container">
      <div className="row">


        <div className="col col-sm-3">
          <SearchPanel />
        </div>
        <div className="col col-sm-9">
          <Challenge />
          <Challenge />
        </div>
      </div>

    </div>




  </div>
)

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;