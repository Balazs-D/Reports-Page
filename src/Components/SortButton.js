import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import { Context } from "../Context/Context";

const SortButton = (props) => {
  const context = useContext(Context);

  return (
    <Button onClick={props.onClick}>
      <i class="fas fa-arrows-alt-v"></i>
    </Button>
  );
};

const Button = styled.button`
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

export default SortButton;
