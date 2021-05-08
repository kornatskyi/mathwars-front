import React from 'react'
import Challenge from '../../components/Challenge.jsx'
import BrowsePanel from '../../components/BrowsePanel.jsx'


export default function BrowsePage() {
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
        </div>
      </div>

    </div>

        </div>
    )
}
