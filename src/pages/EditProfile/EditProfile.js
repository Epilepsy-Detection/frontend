import { BsPersonFill } from "react-icons/bs";
import Button from "../../components/Button/Button";
import PatientHeader from "../../components/PatientHeader/PatientHeader";
import TextField from "../../components/TextField/TextField";
import { hideDropdown } from "../../utils/ui_functions";
import patientStyles from "../Home/subpages/PatientDashboard/PatientDashboard.module.css";
import styles from "./EditProfile.module.css";
import { useSelector } from "react-redux";
import { useRef } from "react";
import useEditProfile from "./hooks/use-edit-profile";

const EditProfile = () => {
  const fileInput = useRef(null);
  const { changeIcon } = useEditProfile();

  const handleFileChange = (e) => {
    const newPicture = e.target.files[0];
    changeIcon(newPicture);
  };

  const handleIconChange = (e) => {
    e.preventDefault();
    fileInput.current.click();
  };

  const user = useSelector((state) => state.auth.user);
  return (
    <div className={patientStyles.background}>
      <PatientHeader />
      <main className={patientStyles["main-bg"]} onClick={hideDropdown}>
        <h1>Edit Profile</h1>
        <form className={styles["edit-profile-form"]}>
          <div className={styles["change-pfp"]}>
            <div className={styles.pfp}>
              <BsPersonFill size={100} />
            </div>
            <input
              style={{ display: "none" }}
              ref={fileInput}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
            <button
              type="file"
              className={styles["change-pfp-btn"]}
              onClick={handleIconChange}
            >
              Edit Icon
            </button>
            <button className={styles["change-pfp-btn"]}>Remove Icon</button>
          </div>
          <div className={styles.separator}></div>
          <div className={styles["profile-details"]}>
            <div className={styles.name}>
              <TextField
                label="First Name"
                type="text"
                placeholder={user.firstName}
                readOnly
              />
              <TextField
                label="Last Name"
                type="text"
                placeholder={user.lastName}
                readOnly
              />
            </div>
            <TextField
              label="Email"
              type="email"
              placeholder={user.email}
              readOnly
            />
            <TextField
              label="Password"
              type="password"
              placeholder="Old Password"
            />
            <TextField type="password" placeholder="New Password" />
            <Button className={styles.save}>Save</Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default EditProfile;
