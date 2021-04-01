
import React from 'react';
import { Button, Alert, Navbar, Nav} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Browser from '/home/laroma/Projects/mathwars-front/src/components/Browser.jsx'
import ChallengeCreator from '/home/laroma/Projects/mathwars-front/src/components/ChallengeCreator.jsx'




const App = () => (


<Router>
<div>
<Navbar>
    <Link className="nav-link" to="/browser">Browser</Link>
    <Link className="nav-link" to="/create">Create Challenge</Link>
  </Navbar>

  {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
  <Switch>
    <Route path="/browser">
      <Browser />
    </Route>
    <Route path="/create">
      <ChallengeCreator />
    </Route>

  </Switch>
</div>
</Router>
  
)

export default App;