import styles from "./PatientDashboard.module.css";
import ReportsTable from "./components/ReportsTable";
import PatientHeader from "../../../../components/PatientHeader/PatientHeader";
import { hideDropdown } from "../../../../utils/ui_functions";
import useGetReport from "./hooks/useGetReport";

const PatientDashboard = () => {
  const { report, loading, error } = useGetReport();

  return (
    <div className={styles.background}>
      <PatientHeader />
      <main className={styles["main-bg"]} onClick={hideDropdown}>
        <h1>All Reports</h1>
        <h4>
          Total Reports:{" "}
          <span className={styles["reports-number"]}>
            {report.length} reports
          </span>
        </h4>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {report && <ReportsTable reports={report} />}
      </main>
    </div>
  );
};

export default PatientDashboard;
