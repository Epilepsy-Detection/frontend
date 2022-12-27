import Dropdown from "react-dropdown";
import Button from "../../../../../components/Button/Button";
import styles from "./ActivePatients.module.css";
import { useNavigate } from "react-router-dom";

const ActivePatients = () => {
  const navigate = useNavigate();
  const options = ["one", "two", "three"];
  const defaultOption = options[0];

  const handleUploadFile = () => {
    navigate("/home/upload-eeg");
  };
  return (
    <div className={styles["patients-dropdown"]}>
      <p>Select Active Patient:</p>
      <Dropdown
        options={options}
        value={defaultOption}
        placeholder="Select an option"
      />
      <Button
        onClick={handleUploadFile}
        className={styles["upload-file-button"]}
      >
        Upload EEG File
      </Button>
    </div>
  );
};

export default ActivePatients;
