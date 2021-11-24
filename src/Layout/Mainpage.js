import React from "react";
import DecimalConverter from "./Functions/DecimalConverter";
import BinaryConverter from "./Functions/BinaryConverter";
import "../Sass/Mainpage.scss";
import { useState } from "react";
export default function Mainpage() {
  const [Binary, setBinary] = useState("");
  const [Decimal, setDecimal] = useState("");
  return (
    <div className="holder">
      <div className="converter">Decimal converter</div>
      <input
        type="number"
        className="number"
        onInput={(e) => {
          if (e.target.value !== "") {
            setBinary(DecimalConverter(e.target.value));
          }
          else {setBinary('')}
        }}
      ></input>
      <div className="results">Your Binary number is {Binary}</div>
      <div className="converter">Binary converter</div>
      <input type="number" className="number" onInput={(e) => {
          if (e.target.value !== "") {
            setDecimal(BinaryConverter(e.target.value));
          }
          else {setDecimal('')}
        }}></input>
      <div className="results">Your Decimal number is {Decimal}</div>
    </div>
  );
}
