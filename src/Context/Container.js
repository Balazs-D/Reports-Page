import React, { Fragment, useState } from "react";
import { Context } from "./Context";

const Container = (props) => {
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [currentFilterSelection, setCurrentFilterSelection] = useState([]);
  const [currentPublishArray, setCurrentPublishArray] = useState([""]);
  const [pagValue, setPagValue] = useState(20);
  const [upwardsScore, setUpwardsScore] = useState(true);
  const [upwards, setUpwards] = useState(true);

  const [arrayToSort, setArrayToSort] = useState("bankName");
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
        arrayToSort,
        setArrayToSort,
        upwardsScore,
        setUpwardsScore,
      }}
    >
      <Fragment>{props.children}</Fragment>
    </Context.Provider>
  );
};

export default Container;
