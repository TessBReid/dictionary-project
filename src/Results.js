import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";

import "./Results.css";

export default function Results(props) {
  if (props.result) {
    return (
      <div className="Results">
        <h3>{props.result.word}</h3>
        {props.result.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}
        {props.result.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
