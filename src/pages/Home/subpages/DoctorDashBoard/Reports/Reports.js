import DoctorReports from "./components/DoctorReports";
import styles from "./Reports.module.css";
import useDoctorReports from "./hooks/useDoctorReports";

const Reports = () => {
  const { report, loading, error } = useDoctorReports();
  return (
    <main className={styles["main-bg"]}>
      <h1>All Reports</h1>
      <h4>
        Total Reports:{" "}
        <span className={styles["reports-number"]}>
          {report.length} reports
        </span>
      </h4>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {report && <DoctorReports reports={report} />}
    </main>
  );
};

export default Reports;
