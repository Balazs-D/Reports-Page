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

      <div className="section two">
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
      </div>
      <input
        className="searchButton"
        type="button"
        value="Search"
        onClick={handleClick}
      ></input>
    </FilterCont>
  );
};

const FilterCont = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  display: flex;
  padding: 0.5vw;
  border: 1px solid black;
  border-radius: 4px;
  margin: 0 0.5vw;
  .section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-bottom: 1vw;
    border: 1px solid black;
    border-radius: 4px;
  }

  p {
    padding: 0 0.5vw;
  }
`;

export default FilterType;
