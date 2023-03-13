import styles from "./PatientDashboard.module.css";
import logo from "../../../../assets/logo.png";
import { BsPersonFill } from "react-icons/bs";
import ReportsTable from "./components/ReportsTable";

const PatientDashboard = () => {
  const showDropdown = () => {
    const dropdown = document.querySelector(`.${styles.dropdown}`);
    dropdown.classList.toggle(styles["hide"]);
  };
  return (
    <div className={styles.background}>
      <header className={styles.header}>
        <div className={styles.welcome}>
          <img alt="Logo" src={logo}></img>
          <h1>Hello, Ahmed</h1>
        </div>
        <div className={styles.profile} onClick={showDropdown}>
          <BsPersonFill size={40} color="#fea8db" />
        </div>
        <div className={styles.dropdown + " " + styles.hide}>
          <a href="#">Edit Profile</a>
          <a href="#">Emergency Contacts</a>
          <a href="#">Logout</a>
        </div>
      </header>
      <main className={styles["reports-table"]}>
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
