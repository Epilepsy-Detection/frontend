import { useMemo } from "react";
import { useTable } from "react-table";
import styles from "./DoctorReports.module.css";
import { Link } from "react-router-dom";

const DoctorReports = ({ reports }) => {
  const columns = useMemo(
    () => [
      {
        Header: "Patient Name",
        accessor: "_patientId",
        Cell: ({ value }) => (
          <Link
            to={"/home/reports/" + value["_id"]}
            className={styles["patient-name"]}
          >
            {value.name}
          </Link>
        ),
      },
      {
        Header: "Prediction",
        accessor: "prediction.label",
      },
      {
        Header: "Confidence",
        accessor: "prediction.confidence",
      },
    ],
    []
  );

  const data = useMemo(() => reports, [reports]);

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

export default DoctorReports;
