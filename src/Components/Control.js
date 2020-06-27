import React, { useContext, useState } from "react";
import styled from "styled-components";

// Components
import InputText from "./Input";
import FilterType from "./FilterType";
import FilterPublished from "./FilterPublished";
import ScoreRange from "./ScoreRange";
import Pagination from "./Pagination";

const Control = () => {
  const [isHidden, setIsHidden] = useState(false);
  console.log(isHidden);

  const toggleFilterBar = () => {
    setIsHidden(!isHidden);
  };
  return (
    <ControlCont>
      <Span className="filterSpan" hidden={isHidden}>
        <InputText />
        <ScoreRange />
        <FilterType />
        {/* <FilterPublished /> */}
      </Span>
      <Span>
        <input
          className="side"
          type="button"
          value={isHidden ? "Show Filters" : "Hide Filters"}
          onClick={toggleFilterBar}
        ></input>
        <Pagination className="side" />
      </Span>
    </ControlCont>
  );
};

const Span = styled.span`
  display: ${(props) => (props.hidden ? "none" : "flex")};
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const ControlCont = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  padding: 2vh 0;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 2vw 0 0vw 0;

  .side {
    margin: 0.5vw;
  }
`;

export default Control;
