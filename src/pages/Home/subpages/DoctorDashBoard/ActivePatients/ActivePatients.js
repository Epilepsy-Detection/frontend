import Dropdown from "react-dropdown";
import styles from "./ActivePatients.module.css";

const ActivePatients = () => {
  const options = ["one", "two", "three"];
  const defaultOption = options[0];

  return (
    <div className={styles["patients-dropdown"]}>
      <p>Select Active Patient:</p>
      <Dropdown
        className={styles["dropdown"]}
        options={options}
        value={defaultOption}
        placeholder="Select an option"
      />
    </div>
  );
};

export default ActivePatients;
