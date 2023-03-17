import { useMemo } from "react";
import { useTable } from "react-table";
import styles from "./ReportsTable.module.css";

const ReportsTable = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Report",
        accessor: "report.name",
      },
      {
        Header: "Date",
        accessor: "report.date",
      },
      {
        Header: "Actions",
        accessor: "report.id",
        Cell: ({ cell: { value } }) => (
          <div>
            <button
              className={styles["view-btn"]}
              onClick={() => console.log(value)}
            >
              View
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const data = useMemo(
    () => [
      {
        report: {
          name: "Report 1",
          date: "2021-01-01",
          id: 1,
        },
      },
      {
        report: {
          name: "Report 2",
          date: "2021-01-02",
          id: 2,
        },
      },
    ],
    []
  );

  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
  } = useTable({
    columns,
    data,
  });

  return (
    <table {...getTableProps()} className={styles.table}>
      <thead className={styles.header}>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ReportsTable;
