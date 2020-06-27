import React, { useState, useEffect, useContext, Fragment } from "react";
import styled from "styled-components";
import { Context } from "../Context/Context";

const InputText = () => {
  const context = useContext(Context);
  const [currentKeyword, setCurrentKeyword] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setCurrentKeyword(e.target.value.toLowerCase());
    console.log(e.target.value);
  };

  const handleSearch = () => {
    const currentArr = context.data.filter(
      (item) =>
        item.body.bankName.toLowerCase().includes(currentKeyword) ||
        item.body.bankBIC[0].includes(currentKeyword)
    );

    context.setCurrentData(currentArr);
    setCurrentKeyword("");
    console.log(context.currentData);
  };

  return (
    <SearchCont>
      <p>Keyword Search (only name & bic)</p>
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
  @media (min-width: 0px) {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 2vw;
    border: 1px solid black;
    border-radius: 4px;
    margin: 0 0 1vw 0;
    p {
      margin: 0 0 2vw 0;
    }

    input {
      padding: 10px;
      outline: none;
      width: 50%;
      border: 1px solid black;
      border-radius: 4px;
      justify-content: flex-start;
      align-items: flex-start;
    }
    .searchButton {
      width: 75px;
      margin: 0 0vw;
      background: white;
      color: black;
      font-weight: bold;
    }
    span {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
  @media (min-width: 800px) {
    margin: 0.5vw;
  }
`;

export default InputText;
