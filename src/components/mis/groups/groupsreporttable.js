import React, { useState } from "react";
import Table from "../../../common/table";
import { getGroups } from "./groups";
import _ from "lodash";

const GroupsReportTable = ({ loading }) => {
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
  const groups = getGroups();
  const groupsTotal = getGroups();
  let grant = groupsTotal.map((a) => parseFloat(a.grant));
  let loan = groupsTotal.map((a) => parseFloat(a.loan));

  let sumGrant = _(grant)
    .map((el) => {
      return parseFloat(el);
    })
    .sum(grant);
  let sumLoan = _(loan)
    .map((el) => {
      return parseFloat(el);
    })
    .sum(loan);

  const amountFormat = (amount) => new Intl.NumberFormat().format(amount);

  function currencyFormat1(num) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  const columns = [
    {
      key: "count",
      label: "#",
      content: () => numbering++,
    },

    { path: "groupno", label: "Group No" },
    { path: "groupname", label: "Group Name" },
    { path: "noofmembers", label: "No. of Group Members" },
    {
      key: "id",
      label: "Grants Amount",
      content: (a) => currencyFormat1(a.grant),
    },
    {
      key: "id",
      label: "Loans Amount",
      content: (a) => currencyFormat1(a.loan),
    },
  ];

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
  const count = groups.length;
  return (
    <div style={{ alignText: "right" }}>
      <Table
        columns={columns}
        data={groups}
        sortColumn={sortColumn}
        onSort={handleSort}
        count={count}
        name="Total No of Registered Groups"
        grantsTotal={currencyFormat1(sumGrant)}
        loansTotal={currencyFormat1(sumLoan)}
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

export default GroupsReportTable;
