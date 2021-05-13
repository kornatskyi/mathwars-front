import React from 'react'

export default function ChallengePageHeader(props) {
    return (
        <div className="challenge-page-header-constainer">
              <div className="header">
              <div className="lvl">{props.difficulty}</div>
              <div className="name"><h4>{props.name}</h4></div>
          </div>
          <div className="meta-data">
              <p>{props.athor}</p>
              <h6>Topics included</h6>
              <span></span>
              <span>Geometry  1</span>
              <span>Equations</span>
          </div>
        </div>
    )
}
