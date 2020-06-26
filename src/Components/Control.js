import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { Context } from "../Context/Context";

// Components
import InputText from "./Input";
import Filter from "./Filter";

const Control = () => {
  const context = useContext(Context);

  return (
    <ControlCont>
      <InputText />
      <Filter />
    </ControlCont>
  );
};

const ControlCont = styled.div`
  width: 80vw;
  height: 10vh;
  display: flex;
  padding: 2vh 0;
  justify-content: space-between;
`;

export default Control;
