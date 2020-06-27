import React, { Fragment } from "react";
import styled from "styled-components";

const Checkbox = (props) => {
  return (
    <Cont>
      <input
        type="checkbox"
        id={props.name}
        name={props.name}
        onChange={props.onChange}
      ></input>
      <label htmlFor={props.name}>{props.name}</label>
    </Cont>
  );
};

const Cont = styled.div`
  display: flex;
  margin-right: 1vw;

  label {
    font-size: 0.7rem;
  }
`;

export default Checkbox;
