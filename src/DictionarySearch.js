import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./DictionarySearch.css";

export default function DictionarySearch() {
  const [keyword, setKeyword] = useState(null);
  const [result, setResult] = useState(null);

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  //Documentation: https://dictionaryapi.dev/

  function handelSearch(event) {
    event.preventDefault();

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
              className="form-control"
            />
          </div>
          <div className="col-4">
            <input
              type="submit"
              value="Search"
              className="w-100 btn btn-success mb-3"
            />
          </div>
        </div>
      </form>
      <Results result={result} />
    </div>
  );
}
