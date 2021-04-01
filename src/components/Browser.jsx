'use strict';
import React, { useState, useEffect } from "react";
import Challenge from './Challenge.jsx';
import Filter from './Filter.jsx';

//CSS
import '../styles/browser.scss'

export default function Browser() {


    const [data, setData] = useState("")
  
    // setChallenge(data.challenge.body);
  useEffect(() => {
    fetchData();
  
  }, [])
  
  useEffect(() => {
    
    if(data === "") {
      console.log("Data didn't set");
      return
    }
  
    console.log("Got data: " + data);

  
  }, [data])
  
  
  const fetchData = () => {
    fetch('http://localhost:8125/data.json')
    .then(response => response.json()).then(data => {
    
      setData(data);
    });
  }

  // console.log(Object.values(data));

    return (
        <div className="container">
            <div className="left-bar"><Filter/></div>
            <div className="right-bar">

              
              
            {Object.values(data).map(challenge => <Challenge key={challenge.id} data={challenge}/>)}
            </div>
        </div>
    )
}
