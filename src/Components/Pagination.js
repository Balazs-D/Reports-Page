import React, { useState, useEffect, useContext, Fragment } from "react";
import styled from "styled-components";
import { Context } from "../Context/Context";

const Pagination = () => {
  const context = useContext(Context);

  const Next = () => {
    context.setPagValue(context.pagValue + 10);
  };
  const Prev = () => {
    context.setPagValue(context.pagValue === 10 ? 10 : context.pagValue - 10);
  };

  return (
    <PagCont>
      <input type="button" value="Previous" onClick={Prev}></input>
      <p>
        {context.pagValue / 10} / {5000 / 10}
      </p>
      <input type="button" value="Next" onClick={Next}></input>
    </PagCont>
  );
};

const PagCont = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  height: 100%;
  width: 30%;
  border: 2px solid red;

  p {
    width: 8vw;
    padding: 0 1.2vw;
    border-radius: 8px;
    margin: 0;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }

  input {
    width: 6vw;
  }
`;

export default Pagination;
