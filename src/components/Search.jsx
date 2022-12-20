import React, { useState } from "react";

export const Search = (props) => {
  const { searchMovies = Function.prototype } = props;

  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const handleFilter = (e) => {
    setType(e.target.dataset.type);
    searchMovies(search, e.target.dataset.type);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      searchMovies(search, type);
    }
  };

  return (
    <div className="row">
      <div className="input-field">
        <input
          id="email_inline"
          type="search"
          className="validate"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKey}
        />
        <button
          className="btn search-btn grey darken-4"
          onClick={() => searchMovies(search, type)}
        >
          Search
        </button>
        <div>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="all"
              onChange={handleFilter}
              checked={type === "all"}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="movie"
              onChange={handleFilter}
              checked={type === "movie"}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="series"
              onChange={handleFilter}
              checked={type === "series"}
            />
            <span>Series only</span>
          </label>
        </div>
      </div>
    </div>
  );
};
