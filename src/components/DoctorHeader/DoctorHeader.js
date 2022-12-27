import { useState, useEffect } from "react";
import styles from "./DoctorHeader.module.css";
import { Link, useNavigate } from "react-router-dom";

const DoctorHeader = ({ logoutHandler, enterCreatePatientModal }) => {
  let [isExcludedMatch, setIsExcludedMatch] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setIsExcludedMatch(
      ["/frontend/", "/frontend/login", "/frontend/register"].includes(
        window.location.pathname
      )
    );
    return () => {};
  }, [navigate]);
  return isExcludedMatch ? null : (
    <header className={styles.header}>
      <h1>Doctor Dashboard</h1>
      <ul>
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
  );
};

export default DoctorHeader;
