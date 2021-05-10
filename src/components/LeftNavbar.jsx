import React from "react";

export default function LeftNavbar() {
  return (
    <div className="left-navbar-container">
      <div className="navbar">
        <div className="nav-item">
          <img className="logo" src="" alt="" />
          <a href="">Dashboard</a>
        </div>
        <div className="nav-item">
            <a href="">Browse</a>
            <i></i>
        </div>
        <div className="nav-item">
            <a href="">Docs</a>
            <i></i>
        </div>
        <div className="nav-item">
            <a href="">Forum</a>
            <i></i>
        </div>
      </div>
    </div>
  );
}
