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

  const sortName = () => {
    context.setUpwards(!context.upwards);
  };

  return (
    <Styles>
      <table>
        <tbody>
          <tr className="titleRow">
            <th>
              Bank Name{" "}
              <button onClick={sortName}>
                {context.upwards ? (
                  <i class="fas fa-arrow-circle-up"></i>
                ) : (
                  <i class="fas fa-arrow-circle-down"></i>
                )}
              </button>
            </th>

            <th>Bank BIC</th>
            <th>Score</th>
            <th>Type</th>
            <th>Created at</th>
            <th>Published at</th>
          </tr>
          {context.currentData &&
            context.currentData
              .sort((a, b) =>
                context.upwards
                  ? a.body.bankName.localeCompare(b.body.bankName)
                  : b.body.bankName.localeCompare(a.body.bankName)
              )
              .map((item, i) => {
                if (i > context.pagValue - 10 && i < context.pagValue) {
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
                }
              })}
        </tbody>
      </table>
    </Styles>
  );
};

const Styles = styled.div`
  @media (min-width: 0px) {
    padding: 0rem;
    margin: 1vw 0;
    font-size: 3vw;
    width: 100vw;
    overflow: scroll;
    .sortButton {
      margin: 0 1vw;
      position: absolute;
    }
    button {
      background: transparent;
      border: none;
      outline: none;
    }

    table {
      border-spacing: 0;
      /* border: 1px solid black; */
      color: black;
      width: 100%;
      .titleRow {
        background: orange;
      }
      tr {
        height: 4vw;
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
        border-bottom: 1px dashed grey;
        border-right: 1px dashed grey;

        :last-child {
          border-right: 0;
        }
      }
    }
  }
  @media (min-width: 800px) {
    font-size: 1vw;
    width: 100%;
    overflow: visible;
  }
`;

export default Table;
