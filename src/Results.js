import React from "react";

import "./Results.css";

export default function Results(props) {
  console.log(props.result);
  if (props.result) {
    return (
      <div className="Results">
        <h3>{props.result.word}</h3>
        {props.result.meanings.map(function (meaning, index) {
          return meaning.definitions[0].definition;
        })}
      </div>
    );
  } else {
    return null;
  }
}
