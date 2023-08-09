import React from "react";

const Table = ({
  data = null,
  columns = null,
  hover = true,
  striped = true,
}) => {
  const getCaps = (head, field) => {
    if (head) return head.toUpperCase();
    return field.toUpperCase();
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns &&
              columns.map((head, i) => (
                <th key={i}>{getCaps(head.header, head.field)}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((row, i) => (
              <tr
                key={i}
                className={`${hover && "hover"} ${striped && "striped"}`}
              >
                {columns.map((col, i) => (
                  <td key={i}>{row[col.field]}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
      {data ? null : <p>No Row to show :)</p>}
    </div>
  );
};

export default Table;
