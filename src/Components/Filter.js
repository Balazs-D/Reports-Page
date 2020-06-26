import React, { useState, useEffect, useContext, Fragment } from "react";
import styled from "styled-components";
import { Context } from "../Context/Context";
// Components
import Checkbox from "./Checkbox";

const FilterMods = [
  "Published",
  "Not Published",
  "Extended",
  "Primary",
  "Intermediate",
];

const Filter = (props) => {
  const context = useContext(Context);
  const [currentKeyword, setCurrentKeyword] = useState("");

  return (
    <FilterCont>
      <div className="section one">
        {FilterMods.map((item, i) => {
          if (i < 2) return <Checkbox key={i} name={item} />;
        })}
      </div>
      <div className="section two">
        {FilterMods.map((item, i) => {
          if (i > 1) return <Checkbox key={i} name={item} />;
        })}
      </div>
    </FilterCont>
  );
};

const FilterCont = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;

  .section {
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    margin-bottom: 1vw;
    padding: 0.5vw;
    border-radius: 8px;
    background: lightgrey;
  }
`;

export default Filter;
