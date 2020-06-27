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

const Filter = (props) => {
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

  const handlePublishCheck = (e) => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;
    console.log(today);
    if (context.currentPublishArray.includes(e.target.name)) {
      let Ind = context.currentPublishArray.indexOf(e.target.name);
      context.currentPublishArray.splice(Ind, 1);
    } else {
      context.currentPublishArray.push(e.target.name);
    }
    const currentArr = context.data.filter((f) => today < f.body.createdAt);

    console.log(context.data.filter((f) => f.createdAt));

    context.setCurrentData(currentArr);
  };

  useEffect(() => {
    if (context.currentFilterSelection.length === 0) {
      context.setCurrentData(context.data);
    }
    //eslint-disable-next-line
  }, [context.currentFilterSelection]);

  return (
    <FilterCont>
      <div className="section one">
        {FilterMods.map((item, i) => {
          if (i < 2)
            return (
              <Checkbox
                key={i}
                name={item}
                onChange={(e) => handlePublishCheck(e)}
              />
            );
        })}
      </div>
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
    </FilterCont>
  );
};

const FilterCont = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  display: flex;

  .section {
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1vw;
    /* padding: 0.5vw; */
    border-radius: 8px;
    background: lightgrey;
  }
`;

export default Filter;
