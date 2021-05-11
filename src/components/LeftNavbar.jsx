import React from "react";

export default function LeftNavbar() {
  return (
    <div className="left-navbar-container">
      <div className="navbar">
        
        <div className="nav-item">
          <img className="logo" src="" alt="" />
          <a href=""><p>Dashboard</p></a>
        </div>
        <div className="nav-item">
            <a href=""><p>Browse</p></a>
            <i></i>
        </div>
        <div className="nav-item">
            <a href=""><p>Docs</p></a>
            <i></i>
        </div>
        <div className="nav-item">
            <a href=""><p>Forum</p></a>
            <i></i>
        </div>
      </div>
    </div>
  );
}
