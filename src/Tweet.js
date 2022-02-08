import React from "react";
import "./App.css";

function Tweet({ name, message }) {
  return (
    <div className="tweet">
      <h3>{name}</h3>
      <p>{message}</p>
      <h3>Number of Likes</h3>
    </div>
  );
}

export default Tweet;

// timestamp 25:40
