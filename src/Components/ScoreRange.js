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
    context.setCurrentData(currentArr);
  };

  return (
    <SearchCont>
      <label htmlFor="min">Min.</label>
      <input
        type="text"
        id="min"
        name="min"
        value={minVal}
        onChange={(e) => handleMin(e)}
      ></input>
      <label htmlFor="max">Max.</label>
      <input
        type="text"
        id="max"
        name="max"
        onChange={(e) => handleMax(e)}
      ></input>
      <input
        className="searchButton"
        type="button"
        value="Set Range-Filter"
        onClick={handleFilterRange}
      ></input>
    </SearchCont>
  );
};

const SearchCont = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 35%;
`;

export default ScoreRange;
