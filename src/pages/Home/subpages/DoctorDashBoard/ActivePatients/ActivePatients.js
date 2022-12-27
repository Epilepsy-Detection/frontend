import Dropdown from "react-dropdown";
import Button from "../../../../../components/Button/Button";
import styles from "./ActivePatients.module.css";

const ActivePatients = () => {
  const options = ["one", "two", "three"];
  const defaultOption = options[0];
  return (
    <div className={styles["patients-dropdown"]}>
      <p>Select Active Patient:</p>
      <Dropdown
        options={options}
        value={defaultOption}
        placeholder="Select an option"
      />
      <Button className={styles["upload-file-button"]}>Upload EEG File</Button>
    </div>
  );
};

export default ActivePatients;
