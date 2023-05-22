import React from "react";
import _ from "lodash";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  totalAmount: {
    textAlign: "right",
  },
});

const TableBody = ({ data, columns, classes }) => {
  const classesText = useStyles();
  const renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

  const createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };

  return (
    <tbody>
      {data.map((item) => (
        <tr key={item._id}>
          {columns.map((column) => (
            <td
              key={createKey(item, column)}
              className={(classes, classesText.totalAmount)}
            >
              {renderCell(item, column)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
