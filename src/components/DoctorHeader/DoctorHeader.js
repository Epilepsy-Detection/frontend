import { useState, useEffect } from "react";
import styles from "./DoctorHeader.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CreatePatientModal from "../../pages/Home/subpages/DoctorDashBoard/CreatePatientModal/CreatePatientModal";
import { useDispatch } from "react-redux";
import { logout } from "../../slices/auth";

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

  if (user && user.role !== "doctor") return null;

  return (
    <>
      <header className={styles.header}>
        <h1>
          <Link to="/home">Doctor Dashboard</Link>
        </h1>
        <ul>
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
