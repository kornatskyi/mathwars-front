import React from 'react'
import Challenge from '../../components/ChallengeBlock.jsx'
import BrowsePanel from '../../components/BrowsePanel.jsx'


export default function ChallengePageBrowsePage() {
    return (
        <div>
             <div className="container">
      <div className="row">


        <div className="col col-md-4">
          <BrowsePanel />
        </div>
        <div className="col col-md-8">
          <Challenge />
          <Challenge />
          <Challenge />
        </div>
      </div>

    </div>

        </div>
    )
}
