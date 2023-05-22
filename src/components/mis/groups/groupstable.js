import React, { useState } from "react";
import Table from "../../../common/table";
import { getGroups } from "./groups";

const GroupsTable = ({ loading }) => {
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
  const columns = [
    {
      key: "count",
      label: "#",
      content: () => numbering++,
    },



    { path: "groupno", label: "Group No" },
    { path: "groupname", label: "Group Name" },
    { path: "groupdescription", label: "Group Description" },
    { path: "groupadmin", label: "Group Admin" },
    { path: "grouptreasurer", label: "Group Treasurer" },
    { path: "groupsecretary", label: "Group Secretary" },
  ];

  function currencyFormat(num) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
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
const count = groups.length
  return (
    <div>
      <Table
        columns={columns}
        data={groups}
        sortColumn={sortColumn}
        onSort={handleSort}
        count={count}
        name="Total No of Registered Groups"
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

export default GroupsTable;
