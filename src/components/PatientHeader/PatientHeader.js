import styles from "./PatientHeader.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../slices/auth";
import logo from "../../assets/logo.png";
import { BsPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PatientHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const logoutHandler = () => {
    dispatch(logout());
  };

  const navigateHome = () => {
    navigate("/home");
  };

  const showDropdown = () => {
    const dropdown = document.querySelector(`.${styles.dropdown}`);
    dropdown.classList.toggle(styles["hide"]);
  };

  return (
    <header className={styles.header}>
      <div className={styles.welcome}>
        <img alt="Logo" src={logo} onClick={navigateHome}></img>
        <h1>Hello, {user.firstName}</h1>
      </div>
      <div className={styles.profile} onClick={showDropdown}>
        <BsPersonFill size={40} color="#fea8db" />
      </div>
      <div className={styles.dropdown + " " + styles.hide}>
        <Link to="/home/edit-profile">Edit Profile</Link>
        <Link to="/home/emergency-contacts">Emergency Contacts</Link>
        <Link to="/login" onClick={logoutHandler}>
          Logout
        </Link>
      </div>
    </header>
  );
};

export default PatientHeader;
