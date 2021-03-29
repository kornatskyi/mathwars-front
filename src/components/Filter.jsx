import React from "react";

//CSS
import "../styles/filter.scss";

export default function Filter() {
  return (
    <div className="filter-container">
      <form action="" className="filter-form">
        <input type="text" name="search" id="search" placeholder="Search" />
        <label htmlFor="sortby">
          <span>Sort by</span>
          <select name="sortby" id="sortby">
              <option value="newest">Newest</option>
              <option value="rating">Rating</option>
              <option value="popularity">Popular</option>
          </select>
        </label>

        <label htmlFor="topic">
          <span>Topic</span>
          <select type="text" name="topic" id="topic">
              <option value="algebra1">Algebra 1</option>
              <option value="calculus1">Calculus 1</option>
              <option value="geometry1">Geometry 1</option>
          </select>
        </label>

        <div className="difficulty">
          <label htmlFor="lvl1">
            <span>lvl1</span> <input type="radio" name="difficulty" id="lvl1" />
          </label>
          <label htmlFor="lvl2">
            <span>lvl2</span> <input type="radio" name="difficulty" id="lvl2" />
          </label>
          <label htmlFor="lvl3">
            <span>lvl3</span> <input type="radio" name="difficulty" id="lvl3" />
          </label>
          <label htmlFor="lvl4">
            <span>lvl4</span> <input type="radio" name="difficulty" id="lvl4" />
          </label>
          <label htmlFor="lvl5">
            <span>lvl5</span> <input type="radio" name="difficulty" id="lvl5" />
          </label>
          <label htmlFor="lvl6">
            <span>lvl6</span> <input type="radio" name="difficulty" id="lvl6" />
          </label>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
