import styles from "./PatientHeader.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../slices/auth";
import logo from "../../assets/logo.png";
import { BsPersonFill } from "react-icons/bs";

const PatientHeader = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  const showDropdown = () => {
    const dropdown = document.querySelector(`.${styles.dropdown}`);
    dropdown.classList.toggle(styles["hide"]);
  };

  return (
    <header className={styles.header}>
      <div className={styles.welcome}>
        <img alt="Logo" src={logo}></img>
        <h1>Hello, Ahmed</h1>
      </div>
      <div className={styles.profile} onClick={showDropdown}>
        <BsPersonFill size={40} color="#fea8db" />
      </div>
      <div className={styles.dropdown + " " + styles.hide}>
        <Link to="edit-profile">Edit Profile</Link>
        <Link to="/home/edit-profile">Emergency Contacts</Link>
        <Link to="/login" onClick={logoutHandler}>
          Logout
        </Link>
      </div>
    </header>
  );
};

export default PatientHeader;
