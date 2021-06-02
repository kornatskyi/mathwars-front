import React from "react";
import { Link } from "react-router-dom";
import './home-page.scss'

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
          with programers challenges called CodeWars.
        </p>
      </div>

      <div className="navigation">
        <Link to="/resourses">
          <div>
            <p>Explore challenges</p>
          </div>
        </Link>
        <Link to="/resourses">
          <div>
            <p>Explore challenges</p>
          </div>
        </Link>
        <Link to="/resourses">
          <div>
            <p>Explore challenges</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
