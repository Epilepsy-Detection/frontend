import { useState, useEffect } from "react";
import styles from "./DoctorHeader.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const DoctorHeader = ({ logoutHandler, enterCreatePatientModal }) => {
  const user = useSelector((state) => state.auth.user);
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

  if (user && user.role !== "doctor") return null;

  return isExcludedMatch ? null : (
    <header className={styles.header}>
      <h1>
        <Link to="/home">Doctor Dashboard</Link>
      </h1>
      <ul>
        <li>
          <Link to="/home/reports">Reports</Link>
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
  );
};

export default DoctorHeader;
