import React from "react";


//CSS
import '../styles/challenge.scss'

export default function Challenge() {
  return (
    <div className="challenge-container">
      <div className="challenge-info">
        <div className="challenge-name">Callenge name</div>
        <div className="challenge-lvl">lvl5</div>
        <div className="status">Workin on</div>
        <div className="author">authorName</div>
        <div className="date">17/05/2021</div>
        <div className="topics">
            <p>Calculus</p>
            <p>Algebra</p>
            </div>
      </div>
      <div className="challenge-description">
          <h2>Challenge name</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, ex? Magni dolores odio aut quaerat cum assumenda non! Voluptatum mollitia amet ipsam maxime consequuntur placeat consectetur explicabo voluptatibus suscipit! Commodi recusandae non ipsa, architecto voluptates perspiciatis accusantium omnis debitis illum cum, atque, tempore cumque officiis autem voluptatibus facilis possimus beatae.
          </p>
      </div>
    </div>
  );
}
