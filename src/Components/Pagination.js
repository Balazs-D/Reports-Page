import React, { useState, useEffect, useContext, Fragment } from "react";
import styled from "styled-components";
import { Context } from "../Context/Context";

const Pagination = (props) => {
  const context = useContext(Context);

  const Next = () => {
    context.setPagValue(context.pagValue + 10);
  };
  const Prev = () => {
    context.setPagValue(context.pagValue === 10 ? 10 : context.pagValue - 10);
  };

  const Goto = () => {
    context.setPagValue(context.pagValue === 10 ? 10 : context.pagValue - 10);
  };

  return (
    <Fragment>
      <PagCont className={props.className}>
        <input type="button" value="Previous" onClick={Prev}></input>
        <p>
          {context.pagValue / 10} / {Math.ceil(context.currentData.length / 10)}
        </p>
        <input type="button" value="Next" onClick={Next}></input>
      </PagCont>
    </Fragment>
  );
};

const PagCont = styled.div`
  @media (min-width: 0px) {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    border: 2px solid black;
    border-radius: 8px;
    margin: 1vw 0 0 0;
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
      width: 18vw;
      border: none;
      background: white;
      border-radius: 8px;
      outline: none;
    }
  }
  @media (min-width: 800px) {
    width: 30%;
    input {
      width: 6vw;
    }
  }
`;

export default Pagination;
