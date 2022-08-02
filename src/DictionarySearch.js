import React, { useState } from "react";
import axios from "axios";

import "./DictionarySearch.css";

export default function DictionarySearch() {
  const [keyword, setKeyword] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  //Documentation: https://dictionaryapi.dev/

  function handelSearch(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} ...`);

    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleResponse);
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
              placeholder="Search for a word..."
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
