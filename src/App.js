import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Container from "./Context/Container";

// Components
import Table from "./Components/Table";
import Control from "./Components/Control";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchFile() {
      let res = await axios.get("./reports.json");
      await setData(res.data);
    }
    fetchFile();
  }, []);
  console.log(data);

  return (
    <MainCont>
      <Container>
        <Control />
        <Cont>
          <Table />
        </Cont>
      </Container>
    </MainCont>
  );
};

const MainCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: lightgreen;
`;

const Cont = styled.div`
  width: 100%;
  height: 100vh;
  /* background: lightgreen; */
  display: flex;
  justify-content: center;
  overflow: scroll;
`;

export default App;
