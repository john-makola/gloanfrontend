import React, { useState } from "react";
import Table from "../../../common/table";
import { getAllocatedGrants } from "./grants";
import _ from "lodash"

const GrantsTable = ({ loading, count }) => {
  const [sortColumn, setsortColumn] = useState({
    path: "",
    order: "",
  });

  const handleSort = (sortColumn) => {
    setsortColumn(sortColumn);
  };

  const amountofallocatedgrant = getAllocatedGrants()
  let numbering = 1;
  let allocatedgrant = amountofallocatedgrant.map((a)=> parseFloat(a.grantsamount));
  let sum = _(allocatedgrant).map((el)=>{return parseFloat(el)}).sum(allocatedgrant);

  const currFormat = (num) => {
    return parseFloat(num)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  const grantsAllocated = getAllocatedGrants();
  function currencyFormat(num) {
    return "Kshs " + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  const columns = [
    {
      key: "count",
      label: "#",
      content: () => numbering++,
    },

    { path: "grantallocationno", label: "Grant Allocation No" },
    { path: "groupname", label: "Group Name" },
    { path: "purpose", label: "Purpose of Grant" },
    { key:numbering++,  label: "Amount", content: (a) => currencyFormat(a.grantsamount),},
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

  return (
    <div>
      <Table
        columns={columns}
        data={grantsAllocated}
        name="Total Grants Allocated"
        sortColumn={sortColumn}
        onSort={handleSort}
        count={currencyFormat(sum)}
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
