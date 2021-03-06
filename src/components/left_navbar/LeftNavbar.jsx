import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import search from "../../assets/images/navbar/search-solid.svg";
import book from "../../assets/images/navbar/book-solid.svg";
import forum from "../../assets/images/navbar/comments-regular.svg";
import "./left-navbar.scss";

export default function LeftNavbar() {
  return (
    <div className="left-navbar-container">
      <ul className="navbar">
        <li className="nav-item">
          <Link to="/">
            <img className="logo" src={logo} alt="" />
            <span>Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/browse">
            <img src={search} alt="" />
            <span>Browse</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/addchallenge">
            <img src={book} alt="" />
            <span>Add challenge</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
