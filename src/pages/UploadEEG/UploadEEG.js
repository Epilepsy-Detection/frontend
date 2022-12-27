import Dropdown from "react-dropdown";
import { useState } from "react";
import { useSelector } from "react-redux";
import useCurrentPatients from "./hooks/use-current-patients";
import Button from "../../components/Button/Button";
import styles from "./UploadEEG.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const UploadEEG = () => {
  const user = useSelector((state) => state.auth.user);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const { patients, loading, error: fetchError } = useCurrentPatients(user);
  const types = ["text/plain"];

  if (user.role !== "doctor") return <h1>Not authorized</h1>;

  const patientChangeHandler = (option) => {
    setSelectedPatient(option.value);
  };

  const fileChangeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select a txt file (.txt)");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      setError("Please select a file");
      return;
    }
    if (!selectedPatient) {
      setError("Please select a patient");
      return;
    }
  };

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      {loading && <div>Loading...</div>}
      {fetchError && <div className={styles.error}>{fetchError}</div>}
      <Dropdown
        className={styles.dropdown}
        options={patients}
        onChange={patientChangeHandler}
        placeholder="Select a patient"
        value={selectedPatient}
      />
      <label for="inputTag">
        Select File <br />
        <FontAwesomeIcon className={styles["file-icon"]} icon={faFile} />
        <input
          id="inputTag"
          className={styles["file-input"]}
          type="file"
          onChange={fileChangeHandler}
        />
      </label>
      <div>
        {error && <div className={styles.error}>{error}</div>}
        {file && <div>{file.name}</div>}
      </div>
      <Button type="submit">Upload</Button>
    </form>
  );
};

export default UploadEEG;
