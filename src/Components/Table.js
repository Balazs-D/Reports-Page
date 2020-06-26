import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { Context } from "../Context/Context";

const Table = () => {
  const context = useContext(Context);

  useEffect(() => {
    async function fetchFile() {
      let res = await axios.get("./reports.json");
      await context.setData(res.data);
      await context.setCurrentData(res.data);
    }
    fetchFile();
  }, []);

  return (
    <Styles>
      <table>
        <tbody>
          <tr className="titleRow">
            <th>Bank Name</th>
            <th>Bank BIC</th>
            <th>Score</th>
            <th>Type</th>
            <th>Created at</th>
            <th>Published at</th>
          </tr>
          {context.currentData &&
            context.currentData.map((item, i) => {
              return (
                <tr key={i}>
                  <th>{item.body.bankName}</th>
                  <th>{item.body.bankBIC}</th>
                  <th>{item.body.reportScore}</th>
                  <th>{item.body.type}</th>
                  <th>{item.createdAt}</th>
                  <th>{item.publishedAt}</th>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Styles>
  );
};

const Styles = styled.div`
  @media (min-width: 0px) {
    padding: 1rem;
    font-size: 2vw;
    table {
      border-spacing: 0;
      border: 1px solid black;
      color: black;
      width: 80vw;
      .titleRow {
        background: orange;
      }
      tr {
        :last-child {
          td {
            border-bottom: 0;
          }
        }
      }

      th,
      td {
        margin: 0;
        padding: 0.5rem;
        border-bottom: 1px solid black;
        border-right: 1px solid black;

        :last-child {
          border-right: 0;
        }
      }
    }
  }
  @media (min-width: 800px) {
    font-size: 1vw;
  }
`;

export default Table;
