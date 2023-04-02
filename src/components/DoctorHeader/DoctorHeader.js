import { useState } from "react";
import styles from "./DoctorHeader.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CreatePatientModal from "../../pages/Home/subpages/DoctorDashBoard/CreatePatientModal/CreatePatientModal";
import { useDispatch } from "react-redux";
import { logout } from "../../slices/auth";
import logo from "../../assets/logo.png";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DoctorHeader = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [showCreatePatientModal, setShowCreatePatientModal] = useState(false);

  const logoutHandler = () => {
    dispatch(logout());
  };

  const enterCreatePatientModal = () => {
    setShowCreatePatientModal(true);
  };

  const exitCreatePatientModal = () => {
    setShowCreatePatientModal(false);
  };

  const toggleDropdown = () => {
    const dropdown = document.querySelector(`.${styles.dropdown}`);
    dropdown.classList.toggle(styles["hide"]);
  };

  if (user && user.role !== "doctor") return null;

  return (
    <>
      <header className={styles.header}>
        <div className={styles.dashboard}>
          <img alt="Logo" src={logo}></img>
          <h1>
            <Link to="/home">Doctor Dashboard</Link>
          </h1>
        </div>
        <FontAwesomeIcon
          className={styles.menu}
          icon={faEllipsisVertical}
          onClick={toggleDropdown}
        />
        <ul className={styles.dropdown + " " + styles.hide}>
          <li>
            <Link to="/home/reports">Reports</Link>
          </li>
          <li>
            <Link to="/home/upload-eeg">Upload EEG</Link>
          </li>
          <li>
            <button onClick={enterCreatePatientModal}>Create Patient</button>
          </li>
          <li>
            <Link to="/login" onClick={logoutHandler}>
              Log out
            </Link>
          </li>
        </ul>
      </header>
      <CreatePatientModal
        show={showCreatePatientModal}
        handleClose={exitCreatePatientModal}
      />
    </>
  );
};

export default DoctorHeader;
