import Dropdown from "react-dropdown";
import styles from "./ActivePatients.module.css";

const ActivePatients = ({ activePatients, associatePatient }) => {
  return (
    <div className={styles["patients-dropdown"]}>
      <p>Select Active Patient:</p>
      <Dropdown
        className={styles["dropdown"]}
        options={activePatients}
        value="Select an option"
        placeholder="Select an option"
        onChange={(e) => associatePatient(e.value)}
      />
    </div>
  );
};

export default ActivePatients;
