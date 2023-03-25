import { useMemo } from "react";
import { useTable } from "react-table";
import styles from "./ContactsTable.module.css";
import useEmergencyContacts from "./Hooks/use-emergency-contacts";
import { useSelector } from "react-redux";

const ContactsTable = () => {
  const user = useSelector((state) => state.auth.user);
  const { contacts, loading, error: fetchError } = useEmergencyContacts(user);
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "contact.name",
      },
      {
        Header: "Phone",
        accessor: "contact.phone",
      }
    ],
    []
  );
  
  console.log(contacts);
  const data = contacts.map((contact) => (
        {
          contact: {
            name: contact.name,
            phone: contact.phone
          }
        }
      ));


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

export default ContactsTable;
