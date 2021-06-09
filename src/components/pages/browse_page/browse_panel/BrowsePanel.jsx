import React from "react";
import "./browse-panel.scss";
import axios from "axios";
import { API_URL } from "../../../../utils/constants";

console.log(API_URL);
export default function BrowsePanel(props) {
  
  const hendleForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("name", "John");
    formData.append("password", "John123");

    for (let p of formData) {
      console.log(p);
    }

    axios({
      method: "post",
      url: API_URL + "test",
      data: formData,
    });
  };

  return (
    <div className="browse-container">
      <form
        className="browse-form"
        onSubmit={(e) => {
          hendleForm(e);
        }}
      >
        <label htmlFor="sortBy">
          <p>Search for:</p>
          <input
            name="keyword"
            id="keyword"
            type="text"
            placeholder="keyword..."
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
        </label>
        <label htmlFor="sortBy">
          <p>Sort by:</p>
          <select id="sortBy">
            <option value="new">New firs</option>
            <option value="rating">Rating</option>
            <option value="popularity">Popularity</option>
          </select>
        </label>
        <label htmlFor="topics">
          <p>Topic:</p>
          <select id="topics">
            <option value="calculus">Calculus</option>
            <option value="algebra">Algebra</option>
            <option value="geometry">Gerometry</option>
            <option value="graph-theory">Graph theory</option>
          </select>
        </label>
        <div className="dificulty-lvl-container">
          <label htmlFor="lvl1">
            <input id="lvl1" type="checkbox" />
            lvl1
          </label>
          <label htmlFor="lvl2">
            <input id="lvl2" type="checkbox" />
            lvl2
          </label>
          <label htmlFor="lvl3">
            <input id="lvl3" type="checkbox" />
            lvl3
          </label>
          <label htmlFor="lvl4">
            <input id="lvl4" type="checkbox" />
            lvl4
          </label>
          <label htmlFor="lvl5">
            <input id="lvl5" type="checkbox" />
            lvl5
          </label>
          <label htmlFor="lvl6">
            <input id="lvl6" type="checkbox" />
            lvl6
          </label>
        </div>

        <button type="submit">Show results</button>
      </form>
    </div>
  );
}
