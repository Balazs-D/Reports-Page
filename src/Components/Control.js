import React, { useContext } from "react";
import styled from "styled-components";

// Components
import InputText from "./Input";
import FilterType from "./FilterType";
import FilterPublished from "./FilterPublished";
import ScoreRange from "./ScoreRange";
import Pagination from "./Pagination";

const Control = () => {
  return (
    <ControlCont>
      <span>
        <InputText />
        <ScoreRange />
        <FilterType />
        <FilterPublished />
      </span>
      <Pagination />
    </ControlCont>
  );
};

const ControlCont = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  padding: 2vh 0;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  margin: 2vw 0 0vw 0;
  span {
    display: flex;
    width: 100%;
    flex-direction: row;
  }
`;

export default Control;
