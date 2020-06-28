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
        <CenterCont>
          <Control />
          <Cont>
            <Table />
          </Cont>
        </CenterCont>
      </Container>
    </MainCont>
  );
};

const MainCont = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll;
`;

const Cont = styled.div`
  width: 100%;
  /* background: lightgreen; */
  display: flex;
  justify-content: center;
`;

const CenterCont = styled.div`
  @media (min-width: 0px) {
    width: 95vw;
  }
  @media (min-width: 800px) {
    width: 80vw;
  }
`;

export default App;
