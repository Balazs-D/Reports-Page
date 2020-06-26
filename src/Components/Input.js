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
    console.log(context.currentData);
  };

  return (
    <SearchCont>
      <input
        className="inputText"
        type="text"
        placeholder="Bank Name, Bank BIC search.."
        onChange={(e) => handleChange(e)}
      ></input>
      <input
        className="searchButton"
        type="button"
        value="Search"
        onClick={handleSearch}
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

  input {
    padding: 10px;
    outline: none;
    width: 15vw;
    border: 1px solid black;
    border-radius: 4px;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
  .searchButton {
    width: 5vw;
    margin: 0 1vw;
  }
`;

export default InputText;
