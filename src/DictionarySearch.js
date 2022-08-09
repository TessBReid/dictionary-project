import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./DictionarySearch.css";

export default function DictionarySearch(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [result, setResult] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function search() {
    //Documentation: https://dictionaryapi.dev/
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleResponse);
  }

  function handelSearch(event) {
    event.preventDefault();
    search();
  }

  function searchChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="DictionarySearch">
        <section>
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
        </section>
        <Results result={result} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
