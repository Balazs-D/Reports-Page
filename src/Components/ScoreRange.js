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
  @media (min-width: 0px) {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    flex: 1;
    padding: 2vw;
    border: 1px solid black;
    border-radius: 4px;
    margin: 0 0 1vw 0;
    p {
      margin: 0 0 2vw 0;
    }
    #min {
      margin-bottom: 5px;
    }

    input {
      padding: 10px;
      outline: none;
      border: 1px solid black;
      border-radius: 4px;
      justify-content: flex-start;
      align-items: flex-start;
      margin-right: 4px;
      width: 50%;
    }

    .spanRow {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .spanCol {
      display: flex;
      flex-direction: column;
    }

    .searchButton {
      width: 75px;
      margin: 0vw;
      background: white;
      color: black;
      font-weight: bold;
    }
  }
  @media (min-width: 800px) {
    margin: 0.5vw;

    input {
      width: 80px;
      margin-right: 10px;
    }

    .spanRow {
      display: flex;
      flex-direction: row;
    }
    .spanCol {
      display: flex;
      flex-direction: row;
    }
    .searchButton {
      margin: 0 1vw;
    }

    #min {
      margin-bottom: 0px;
    }
  }
`;

export default ScoreRange;
