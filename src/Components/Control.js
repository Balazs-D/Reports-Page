import React, { useContext } from "react";
import styled from "styled-components";

// Components
import InputText from "./Input";
import Filter from "./Filter";
import ScoreRange from "./ScoreRange";
import Pagination from "./Pagination";

const Control = () => {
  return (
    <ControlCont>
      <span>
        <InputText />
        <Filter />
        <ScoreRange />
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

  span {
    display: flex;
    width: 100%;
    flex-direction: row;
  }
`;

export default Control;
