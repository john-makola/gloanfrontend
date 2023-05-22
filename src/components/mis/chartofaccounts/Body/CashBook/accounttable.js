import React, { useState } from "react";
import Table from "../../../../../common/table";
import { getCashBookDr } from "./cashbookarray";
import _ from "lodash";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  title: {
    textAlign: "right",
  },
});

const AccountTable = ({ loading, count }) => {
  const [sortColumn, setsortColumn] = useState({
    path: "",
    order: "",
  });

  const handleSort = (sortColumn) => {
    setsortColumn(sortColumn);
  };
  const classes = useStyles();
  let numbering = 1;
  const bankTotal = getCashBookDr();
  const cashTotal = getCashBookDr();
  let bank = bankTotal.map((a) => parseFloat(a.bank));
  let cash = cashTotal.map((a) => parseFloat(a.cash));
  let sumBank = _(bank)
    .map((el) => {
      return parseFloat(el);
    })
    .sum(bank);
  let sumCash = _(cash)
    .map((el) => {
      return parseFloat(el);
    })
    .sum(cash);
  const currFormat = (num) => {
    return parseFloat(num)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  const cashbookdrdata = getCashBookDr();
  const columns = [
    {
      key: "count",
      label: "#",
      content: () => numbering++,
    },

    { path: "date", label: "Date" },
    { path: "particulars", label: "Transaction Description" },
    { key: "dr", label: "Debit", content: (a) => currencyFormat(a.cash) },
    { key: "cr", label: "Credit", content: (a) => currencyFormat(a.bank) },
  ];

  function currencyFormat(num) {
    return "" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  if (loading) {
    return (
      <h1>
        <span
          className="spinner-border"
          style={{
            width: " 3rem",
            height: "3rem",
            textAlign: "center",
            color: "#ee9b00",
          }}
        ></span>
      </h1>
    );
  }

  return (
    <div>
      <Table
        columns={columns}
        data={cashbookdrdata}
        sortColumn={sortColumn}
        onSort={handleSort}
        name="Total"
        cashTotal={currencyFormat(sumCash)}
        bankTotal={currencyFormat(sumBank)}
        classes={classes.title}
      />

      {/* <Row className="m-3">
        {error && (
          <div className="ui error message" style={{ marginBottom: 20 }}>
            <ul
              className="list "
              style={{
                "text-align": "center",
              }}
            >
              <li>
                {error.networkError
                  ? "Network Error: - Error connecting to PFMS Database Server: Contact System Administrator"
                  : error.graphQLErrors[0].message}
              </li>
            </ul>
          </div>
        )}
      </Row> */}
    </div>
  );
};

export default AccountTable;
