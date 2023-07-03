import DoctorReports from "./components/DoctorReports";
import styles from "./Reports.module.css";
import useDoctorReports from "./hooks/useDoctorReports";
import DoctorHeader from "../../../../../components/DoctorHeader/DoctorHeader";

const Reports = () => {
  const { report, loading, error } = useDoctorReports();
  return (
    <div className="background">
      <DoctorHeader />
      <main className="main-bg">
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
    </div>
  );
};

export default Reports;
