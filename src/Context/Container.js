import React, { Fragment, useState } from "react";
import { Context } from "./Context";

const Container = (props) => {
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [currentFilterSelection, setCurrentFilterSelection] = useState([]);
  const [currentPublishArray, setCurrentPublishArray] = useState([""]);
  const [pagValue, setPagValue] = useState(10);
  const [upwards, setUpwards] = useState(true);
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
        pagValue,
        setPagValue,
        upwards,
        setUpwards,
      }}
    >
      <Fragment>{props.children}</Fragment>
    </Context.Provider>
  );
};

export default Container;
