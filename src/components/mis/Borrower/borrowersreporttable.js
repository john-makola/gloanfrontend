import React, { useState } from "react";
import Table from "../../../common/table";
import { getUsers } from "./users";

const BorrowersReportTable = ({ loading }) => {
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
  const users = getUsers();
  const columns = [
    {
      key: "count",
      label: "#",
      content: () => numbering++,
    },

    { path: "memberno", label: "Member No" },
    { path: "lastname", label: "Last Name" },
    { path: "group", label: "Group" },
    { path: "amount", label: "Amount" },
  ];

  function currencyFormat(num) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  const count = users.length;
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
        data={users}
        sortColumn={sortColumn}
        onSort={handleSort}
        count={count}
        name="Total Borrowers"
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

export default BorrowersReportTable;
