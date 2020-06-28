import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import { Context } from "../Context/Context";

const ProgressBar = (props) => {
  const context = useContext(Context);

  return <Progress max="200" value={props.value}></Progress>;
};

const Progress = styled.progress`
  /* border: 10px solid black;

  border-radius: 50%;
  background: red;
  height: 20px;
  width: 20px;
  &:hover {
    border: 1px solid black;
    border-radius: 50%;
  } */
`;

export default ProgressBar;
