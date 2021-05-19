import React from "react";
import logo from "../../assets/images/logo.svg";
import search from "../../assets/images/navbar/search-solid.svg";
import book from "../../assets/images/navbar/book-solid.svg";
import forum from "../../assets/images/navbar/comments-regular.svg";
import './left-navbar.scss'

export default function LeftNavbar() {
  return (
    <div className="left-navbar-container">
      <ul className="navbar">
        <li className="nav-item">
          <a href="">
            <img className="logo" src={logo} alt="" />
            <span>Dashboard</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="">
            <img src={search} alt="" />
            <span>Browse</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="">
            <img src={book} alt="" />
            <span>Resources</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="">
            <img src={forum} alt="" />
            <span>Forum</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
