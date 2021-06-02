import React from "react";
import { Link } from "react-router-dom";
import "./home-page.scss";

export default function HomePage() {
  return (
    <div className="home-page-container">
      <div className="title">
        <h1>MathWars</h1>
      </div>
      <div className="desctription">
        <p>
          The main goal of this project is to make math practice available on
          the internet. I was inspired to create this project by the website
          with programer's challenges called <a href="https://www.codewars.com/">CodeWars</a> .
        </p>
      </div>

      <div className="navigation">
        <Link to="/browse">
          <div>
            <p>Explore challenges</p>
          </div>
        </Link>
        <Link to="/addchallenge">
          <div>
            <p>Share your experience</p>
          </div>
        </Link>
        <Link to="/resourses">
          <div>
            <p>Learn new things</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
