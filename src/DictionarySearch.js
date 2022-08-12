import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import "./DictionarySearch.css";

export default function DictionarySearch(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [result, setResult] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    //Documentation: https://dictionaryapi.dev/
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleResponse);

    //Documentation: https://www.pexels.com/api/
    let pexelsApiKey =
      "563492ad6f917000010000015f3557e059bc419ca23fafab403b1b6e";
    let pexelsApiURL = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiURL, { headers: headers }).then(handlePexelsResponse);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
