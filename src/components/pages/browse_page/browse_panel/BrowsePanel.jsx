import React from "react";
import "./browse-panel.scss";

export default function BrowsePanel({setFilter, setIsLoading}) {
  
  const hendleForm = (e) => {
    e.preventDefault();
    let filter = {}
    setIsLoading(true)
    if(e.target['keyword'].value) filter.name = e.target['keyword'].value;
    if(e.target['sortBy'].value) filter.sortBy = e.target['sortBy'].value;
    if(e.target['topic'].value) filter.topic = e.target['topic'].value;
    if(e.target['lvl'].value) filter.lvl = e.target['lvl'].value;
    setFilter(filter)
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
          <select name="sortBy" id="sortBy">
            <option value="new">New first</option>
            <option value="old">Old first</option>

          </select>
        </label>
        <label htmlFor="topic">
          <p>Topi:</p>
          <select name="topic" id="topic">
            <option value="calculus">Calculus</option>
            <option value="algebra">Algebra</option>
            <option value="geometry">Gerometry</option>
            <option value="arithmetics">Arithmetics</option>
          </select>
        </label>
        <div className="dificulty-lvl-container">
          <label htmlFor="lvl1">
            <input id="lvl1" name="lvl" type="radio" value="1" />
            lvl1
          </label>
          <label htmlFor="lvl2">
            <input id="lvl2" name="lvl" type="radio" value="2" />
            lvl2
          </label>
          <label htmlFor="lvl3">
            <input id="lvl3" name="lvl" type="radio" value="3" />
            lvl3
          </label>
          <label htmlFor="lvl4">
            <input id="lvl4" name="lvl" type="radio" value="4" />
            lvl4
          </label>
          <label htmlFor="lvl5">
            <input id="lvl5" name="lvl" type="radio" value="5" />
            lvl5
          </label>
          <label htmlFor="lvl6">
            <input id="lvl6" name="lvl" type="radio" value="6" />
            lvl6
          </label>
        </div>

        <button type="submit">Show results</button>
      </form>
    </div>
  );
}
