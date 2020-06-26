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
      <label for={props.name}>{props.name}</label>
    </Cont>
  );
};

const Cont = styled.div`
  display: flex;
  margin-right: 1vw;
`;

export default Checkbox;
