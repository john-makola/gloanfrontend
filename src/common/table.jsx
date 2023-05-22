import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import TableFormat from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import TableFooter from "./tableFooter";

const Table = ({
  columns,
  sortColumn,
  onSort,
  data,
  count,
  name,
  cashTotal,
  bankTotal,
  loansTotal,
  grantsTotal,
  classes
}) => {
  return (
    <>
      <Row className="m-3">
        <TableFormat striped bordered hover>
          <TableHeader
            columns={columns}
            sortColumn={sortColumn}
            onSort={onSort}
          />
          <TableBody  columns={columns} data={data} classes={classes} />
        </TableFormat>
        <TableFooter
          count={count}
          name={name}
          cashTotal={cashTotal}
          bankTotal={bankTotal}
          grantsTotal={grantsTotal}
          loansTotal={loansTotal}
        />
      </Row>
    </>
  );
};

export default Table;
