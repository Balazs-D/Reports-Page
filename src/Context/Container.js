import React, { Fragment, useState } from "react";
import { Context } from "./Context";

const Container = (props) => {
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [currentFilterSelection, setCurrentFilterSelection] = useState([]);
  const [currentPublishArray, setCurrentPublishArray] = useState([""]);
  return (
    <Context.Provider
      value={{
        currentData,
        setCurrentData,
        data,
        setData,
        currentFilterSelection,
        setCurrentFilterSelection,
        currentPublishArray,
        setCurrentPublishArray,
      }}
    >
      <Fragment>{props.children}</Fragment>
    </Context.Provider>
  );
};

export default Container;
