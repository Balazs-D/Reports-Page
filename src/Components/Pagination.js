import React, { useContext, Fragment } from "react";
import styled from "styled-components";
import { Context } from "../Context/Context";

const Pagination = (props) => {
  const context = useContext(Context);

  const Next = () => {
    context.setPagValue(context.pagValue + 20);
  };
  const Prev = () => {
    context.setPagValue(context.pagValue === 20 ? 20 : context.pagValue - 20);
  };

  return (
    <Fragment>
      <PagCont className={props.className}>
        <input type="button" value="Previous" onClick={Prev}></input>
        <p>
          Page: {context.pagValue / 20} /{" "}
          {Math.ceil(context.currentData.length / 20)}
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
    width: auto;
    border: 2px solid black;
    border-radius: 8px;
    margin: 1vw 0 0 0;
    p {
      width: 20vw;
      padding: 0 1.2vw;
      border-radius: 8px;
      margin: 0;
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
      font-size: 3vw;
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
    p {
      font-size: 0.8vw;
      width: 8vw;
    }
  }
`;

export default Pagination;
