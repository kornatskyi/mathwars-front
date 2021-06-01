import { Button, Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";
import React, { useState } from 'react';
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


import store from './redux/store'
import { addChallenge } from './redux/actionCreator';




const App = () => {
  const [value, setValue] = useState(0); 
  function useForceUpdate() {
    // integer state
    return () => setValue(value => value + 1); // update the state to force render
  }

  store.subscribe(() => {
    useForceUpdate()
    console.log("Store change!", store.getState());
  })

  console.log(store);

  store.dispatch(addChallenge("new Challenge1"))
  console.log(store.getState());

  const state = store.getState().payload

  return (
    <div className="main-container">
      <div>Challenge: {state.challenge}</div>

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
}

export default App;