import React, { useState } from "react";
import Table from "../../../common/table";
import { getSavings } from "./savings";
import _ from "lodash";

const GrantsTable = ({ loading, count }) => {
  const [sortColumn, setsortColumn] = useState({
    path: "",
    order: "",
  });

  const handleSort = (sortColumn) => {
    setsortColumn(sortColumn);
  };

  let numbering = 1;

  const currFormat = (num) => {
    return parseFloat(num)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  const savings = getSavings();
  let personalSavings = savings.map((a) => parseFloat(a.closingbalance));
  let sum = _(personalSavings)
    .map((el) => {
      return parseFloat(el);
    })
    .sum(personalSavings);

  function currencyFormat1(num) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  const columns = [
    {
      key: "count",
      label: "#",
      content: () => numbering++,
    },

    { path: "accountno", label: "Account No" },
    { path: "firstname", label: "FirstName" },
    { path: "lastname", label: "LastName" },
    { path: "groupsname", label: "Grants Type" },
    { path: "mobileno", label: "Mobile No" },
    { key: "opbal", label: "Opening Bal", content: (a) => currencyFormat1(a.openingbalance) },
    { path: "debit", label: "Debit" },
    {path:"credit", label: "Credit"},
    { key: "clsbal", label: "Closing Bal", content: (a) => currencyFormat1(a.closingbalance) },
    
  ];

  function currencyFormat(num) {
    return "Kshs" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
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
        data={savings}
        sortColumn={sortColumn}
        onSort={handleSort}
        count={currencyFormat(sum)}
        name={"Total Savings Amount"}
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

export default GrantsTable;
