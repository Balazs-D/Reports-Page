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
const FilterPublished = (props) => {
  const context = useContext(Context);

  // Function Published / Not Published
  const handlePublishCheck = (e) => {
    const todayDate = new Date();
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

    // var currentArr = context.data.filter(function (item) {
    //   var date = new Date(item.createdAt);
    //   return date >= todayDate;
    // });

    var currentArr = context.data.filter(function (f) {
      let curr = f.createdAt;
      // extract all date strings
      curr = Object.keys(curr);
      // convert strings to date object
      curr = curr.map(function (date) {
        return new Date(date);
      });
      // filter dates by actual date
      var datesMatch = curr.filter(function (date) {
        return date <= todayDate;
      });

      console.log(curr);
      console.log(todayDate);
      // if there is more than 0 results keep it. if 0 then filter it away
      return datesMatch.length > 0;
    });
    context.setCurrentData(currentArr);

    console.log(currentArr);

    // context.setCurrentData(currentArr);
  };

  return (
    <FilterCont>
      <p>Published</p>

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
  border-radius: 8px;
  .section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 1vw;
    border: 1px solid black;
    border-radius: 4px;
  }
  p {
    padding: 0 0.5vw;
  }
`;

export default FilterPublished;
