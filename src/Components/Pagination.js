import React, { useState, useEffect, useContext, Fragment } from "react";
import styled from "styled-components";
import { Context } from "../Context/Context";

const Pagination = () => {
  const context = useContext(Context);

  const Next = () => {
    context.setPagValue(context.pagValue + 1);
  };
  const Prev = () => {
    if (context.setPagValue >= 10) {
      context.setPagValue(context.pagValue - 1);
    }
  };

  return (
    <PagCont>
      <input type="button" value="Previous" onClick={Prev}></input>
      <input type="button" value="Next" onClick={Next}></input>
    </PagCont>
  );
};

const PagCont = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 100%;
  width: 50%;
  background: red;
`;

export default Pagination;
