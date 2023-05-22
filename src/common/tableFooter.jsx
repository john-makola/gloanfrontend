import { textAlign } from "@mui/system";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  color: {
    backgroundColor: "#00A859",
  },
  total: {
    background: "#D9EEE4",
    color: "#00A859",
    fontWeight: "bold",
    textAlign: "right",
    paddingRight: 5,
  },
  totalAmount: {
    background: "#00A859",
    color: "#fff",
    fontWeight: "bold",
    textAlign: "right",
    padding: "5px",
  },
  totalAmountCash: {
    background: "#D9EEE4",
    color: "#00A859",
    fontWeight: "bold",
    textAlign: "right",
    padding: "5px",
  },
  totalTestData: {
    background: "#D9EEE4",
    color: "#D9EEE4",
  },
});

const TableFooter = ({
  cashTotal,
  bankTotal,
  grantsTotal,
  loansTotal,
  count,
  name,
}) => {
  const classes = useStyles();
  return (
    <table>
      <tbody className="tablestlyles">
        <tr key="total">
          <td className={classes.totalTestData}>Testing Data</td>
          <td className={classes.totalTestData}>Testing Data Test</td>
          <td className={classes.total}> {name}</td>
          <td className={classes.totalAmountCash}>
            {cashTotal} {grantsTotal}
          </td>
          <td className={classes.totalAmount}>
            {count} {bankTotal} {loansTotal}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableFooter;
