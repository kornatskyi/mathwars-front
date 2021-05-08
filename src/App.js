import { Button, Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import BrowsePage from './components/pages/BrowsePage.jsx'





const App = () => (
  <div>

<BrowsePage/>
   



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