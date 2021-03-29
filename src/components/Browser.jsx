import React from 'react'
import Challenge from './Challenge.jsx';
import Filter from './Filter.jsx';

//CSS
import '../styles/browser.scss'

export default function Browser() {
    return (
        <div className="container">
            <div className="left-bar"><Filter/></div>
            <div className="right-bar">
            <Challenge/>
            <Challenge/>
            <Challenge/>
            <Challenge/>
            <Challenge/>
            </div>
        </div>
    )
}
