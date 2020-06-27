import React, { useState, useEffect, useContext, Fragment } from "react";
import styled from "styled-components";
import { Context } from "../Context/Context";
// Components
import Checkbox from "./Checkbox";

const FilterMods = [
  "Published",
  "Not Published",
  "extended",
  "primary",
  "intermediate",
];

// Function filter type
const FilterType = (props) => {
  const context = useContext(Context);

  const handleChecked = (e) => {
    if (context.currentFilterSelection.includes(e.target.name)) {
      let Ind = context.currentFilterSelection.indexOf(e.target.name);
      context.currentFilterSelection.splice(Ind, 1);
    } else {
      context.currentFilterSelection.push(e.target.name);
    }
    console.log(context.currentFilterSelection);
    console.log(e.target.name);
    console.log(context.data);
  };

  const handleClick = () => {
    if (context.currentFilterSelection.length !== 0) {
      const currentArr = context.data.filter((f) =>
        context.currentFilterSelection.includes(f.body.type.toString())
      );
      context.setCurrentData(currentArr);
      console.log(currentArr);
    }
    if (context.currentFilterSelection.length === 0) {
      context.setCurrentData(context.data);
    }
  };

  useEffect(() => {
    if (context.currentFilterSelection.length === 0) {
      context.setCurrentData(context.data);
    }
    //eslint-disable-next-line
  }, [context.currentFilterSelection]);

  return (
    <FilterCont>
      <p>Type</p>
      <span>
        {FilterMods.map((item, i) => {
          if (i > 1)
            return (
              <Checkbox
                key={i}
                name={item}
                onChange={(e) => handleChecked(e)}
              />
            );
        })}
        <input
          className="searchButton"
          type="button"
          value="Search"
          onClick={handleClick}
        ></input>
      </span>
    </FilterCont>
  );
};

const FilterCont = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0.5vw;
  border: 1px solid black;
  border-radius: 4px;
  margin: 0 0.5vw;

  span {
    display: flex;
    flex-direction: row;
    flex: 3;
  }
  p {
    padding: 0 0.5vw;
  }
  .searchButton {
    width: 75px;
    margin: 0 1vw;
    background: white;
    color: black;
    font-weight: bold;
    border: 1px solid black;
    border-radius: 4px;
  }
`;

export default FilterType;
