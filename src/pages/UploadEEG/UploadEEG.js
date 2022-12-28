import Dropdown from "react-dropdown";
import { useState } from "react";
import { useSelector } from "react-redux";
import useCurrentPatients from "./hooks/use-current-patients";
import Button from "../../components/Button/Button";
import styles from "./UploadEEG.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faRotate } from "@fortawesome/free-solid-svg-icons";
import useEEGResults from "./hooks/use-eeg-results";
import { labelsMap } from "../../utils/results_utils";

const UploadEEG = () => {
  const user = useSelector((state) => state.auth.user);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const { patients, loading, error: fetchError } = useCurrentPatients(user);
  const {
    results,
    error: resultsError,
    loading: resultsLoading,
    getResults,
    clearResults,
  } = useEEGResults();

  const types = ["text/plain"];

  if (user.role !== "doctor") return <h1>Not authorized</h1>;

  const patientChangeHandler = (option) => {
    setSelectedPatient(option.value);
  };

  const fileChangeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null);
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

    getResults(file, selectedPatient, user);
  };

  return (
    <>
      {!results && (
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
          <label htmlFor="inputTag">
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
      )}
      {resultsLoading && <div className={styles.loading}>Loading...</div>}
      {resultsError && <div className={styles.error}>{resultsError}</div>}
      {results && (
        <div className={styles.results}>
          <h3>Results</h3>
          <div>
            <div>
              <span className={styles.label}>Label: </span>
              <span>
                {results.prediction.label +
                  ` (${labelsMap[results.prediction.label]})`}
              </span>
            </div>
            <div>
              <span className={styles.label}>Confidence: </span>
              <span>
                {(results.prediction.confidence * 100).toFixed(2) + "%"}
              </span>
            </div>
          </div>
          <button onClick={clearResults} className={styles["retry-button"]}>
            Retry <FontAwesomeIcon icon={faRotate} />
          </button>
        </div>
      )}
    </>
  );
};

export default UploadEEG;
