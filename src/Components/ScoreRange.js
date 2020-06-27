import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Context } from "../Context/Context";

const ScoreRange = () => {
  const context = useContext(Context);
  const [minVal, setMinVal] = useState(null);
  const [maxVal, setMaxVal] = useState(null);

  const handleMin = (e) => {
    e.preventDefault();
    setMinVal(e.target.value);
  };
  const handleMax = (e) => {
    e.preventDefault();
    setMaxVal(e.target.value);
  };

  const handleFilterRange = () => {
    const currentArr = context.data.filter(
      (item) =>
        minVal <= item.body.reportScore && maxVal >= item.body.reportScore
    );
    setMaxVal("");
    setMinVal("");

    context.setCurrentData(currentArr);
  };

  return (
    <SearchCont>
      <p>Score Range</p>
      <span className="spanRow">
        <span className="spanCol">
          <input
            type="text"
            placeholder="Minimum"
            id="min"
            name="min"
            value={minVal}
            onChange={(e) => handleMin(e)}
          ></input>
        </span>
        <span className="spanCol">
          <input
            placeholder="Maximum"
            type="text"
            id="max"
            name="max"
            value={maxVal}
            onChange={(e) => handleMax(e)}
          ></input>
        </span>
        <input
          className="searchButton"
          type="button"
          value="Set Filter"
          onClick={handleFilterRange}
        ></input>
      </span>
    </SearchCont>
  );
};

const SearchCont = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  flex: 1;
  padding: 0.5vw;
  border: 1px solid black;
  border-radius: 4px;
  margin: 0 0.5vw;

  input {
    padding: 10px;
    outline: none;
    width: 35px;
    border: 1px solid black;
    border-radius: 4px;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .spanRow {
    display: flex;
    flex-direction: row;
  }

  .spanCol {
    display: flex;
    flex-direction: column;
  }

  .searchButton {
    margin: 0 1vw;
    background: white;
    color: black;
    font-weight: bold;
    border: 2px solid blue;
    width: 75px;
  }
`;

export default ScoreRange;
