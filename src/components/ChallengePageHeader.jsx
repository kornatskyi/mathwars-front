import React from 'react'

export default function ChallengePageHeader() {
    return (
        <div className="challenge-page-header-constainer">
              <div className="header">
              <div className="lvl">lvl 3</div>
              <div className="name"><h4>Challenge name</h4></div>
          </div>
          <div className="meta-data">
              <p>Author Name</p>
              <h6>Topics included</h6>
              <span>Algebra 1</span>
              <span>Geometry  1</span>
              <span>Equations</span>
          </div>
        </div>
    )
}
