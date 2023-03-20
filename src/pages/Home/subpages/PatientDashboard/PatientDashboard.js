import styles from "./PatientDashboard.module.css";
import ReportsTable from "./components/ReportsTable";
import PatientHeader from "../../../../components/PatientHeader/PatientHeader";
import { hideDropdown } from "../../../../utils/ui_functions";

const PatientDashboard = () => {
  return (
    <div className={styles.background}>
      <PatientHeader />
      <main className={styles["main-bg"]} onClick={hideDropdown}>
        <h1>All Reports</h1>
        <h4>
          Total Reports:{" "}
          <span className={styles["reports-number"]}>2 reports</span>
        </h4>
        <ReportsTable />
      </main>
    </div>
  );
};

export default PatientDashboard;
