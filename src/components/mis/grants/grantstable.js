import React, { useState } from "react";
import Table from "../../../common/table";
import { getGrants } from "./grants";
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
  const grants = getGrants();
  let receivedgrant = grants.map((a) => parseFloat(a.grantsamount));
  let sum = _(receivedgrant)
    .map((el) => {
      return parseFloat(el);
    })
    .sum(receivedgrant);

  function currencyFormat1(num) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  const columns = [
    {
      key: "count",
      label: "#",
      content: () => numbering++,
    },

    { path: "grantno", label: "Grant No" },
    { path: "grantname", label: "Grant Name" },
    { path: "grantdescription", label: "Grant Description" },
    { path: "granttype", label: "Grants Type" },
    { path: "donor", label: "Donor" },
    { path: "currency", label: "Currency" },
    {
      key: "grantsamount",
      label: "Amount",
      content: (a) => currencyFormat1(a.grantsamount),
    },
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
        data={grants}
        sortColumn={sortColumn}
        onSort={handleSort}
        count={currencyFormat(sum)}
        name={"Total Grants Received"}
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
