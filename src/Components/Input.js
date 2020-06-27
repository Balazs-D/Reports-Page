import React, { useState, useEffect, useContext, Fragment } from "react";
import styled from "styled-components";
import { Context } from "../Context/Context";

const InputText = () => {
  const context = useContext(Context);
  const [currentKeyword, setCurrentKeyword] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setCurrentKeyword(e.target.value);
    console.log(e.target.value);
  };

  const handleSearch = () => {
    const currentArr = context.data.filter(
      (item) =>
        item.body.bankName.includes(currentKeyword) ||
        item.body.bankBIC[0].includes(currentKeyword)
    );

    context.setCurrentData(currentArr);
    setCurrentKeyword("");
    console.log(context.currentData);
  };

  return (
    <SearchCont>
      <p>Keyword Search (only name & BIC)</p>
      <span>
        <input
          className="inputText"
          type="text"
          value={currentKeyword}
          placeholder="Bank Name, Bank BIC search.."
          onChange={(e) => handleChange(e)}
        ></input>
        <input
          className="searchButton"
          type="button"
          value="Search"
          onClick={handleSearch}
        ></input>
      </span>
    </SearchCont>
  );
};

const SearchCont = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0.5vw;
  border: 1px solid black;
  border-radius: 4px;
  margin: 0 0.5vw;

  input {
    padding: 10px;
    outline: none;
    width: auto;
    border: 1px solid black;
    border-radius: 4px;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .searchButton {
    width: 75px;
    margin: 0 1vw;
    background: white;
    color: black;
    font-weight: bold;
    border: 2px solid blue;
  }
  span {
    display: flex;
    flex-direction: row;
  }
`;

export default InputText;
