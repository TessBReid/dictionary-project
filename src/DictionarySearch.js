import React, { useState } from "react";

import "./DictionarySearch.css";

export default function DictionarySearch() {
  const [keyword, setKeyword] = useState(null);

  function handelSearch(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} ...`);
  }

  function searchChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="DictionarySearch">
      <form onSubmit={handelSearch}>
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              onChange={searchChange}
              placeholder="Search word or phrase..."
              className="w-100"
            />
            <div className="col-4">
              <input
                type="submit"
                value="Search"
                className="w-100 btn btn-primary"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
