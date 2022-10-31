import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { useState } from "react";

function Zaid() {
  const [data, setData] = useState(0);

  const [isLit, setLit] = useState(true);
  const brightness = isLit ? "lit" : "dark";
  return (
    <div className={`room ${brightness}`}>
      the room is {isLit ? "lit" : "dark"}
      <button
        onClick={() => {
          setLit(!isLit);
        }}
      >
        flip
      </button>
      <br />
      <br />
      <br />
      {data}
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          setData(data - 1);
        }}
      >
        sub
      </button>
    </div>
  );
}

ReactDOM.render(<Zaid />, document.querySelector("#root"));
