import { BsPersonFill } from "react-icons/bs";
import Button from "../../components/Button/Button";
import PatientHeader from "../../components/PatientHeader/PatientHeader";
import TextField from "../../components/TextField/TextField";
import { hideDropdown } from "../../utils/ui_functions";
import patientStyles from "../Home/subpages/PatientDashboard/PatientDashboard.module.css";
import styles from "./EditProfile.module.css";

const EditProfile = () => {
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
            <button className={styles["change-pfp-btn"]}>Edit Icon</button>
            <button className={styles["change-pfp-btn"]}>Remove Icon</button>
          </div>
          <div className={styles.separator}></div>
          <div className={styles["profile-details"]}>
            <div className={styles.name}>
              <TextField
                label="First Name"
                type="text"
                placeholder="John"
                readOnly
              />
              <TextField
                label="Last Name"
                type="text"
                placeholder="Doe"
                readOnly
              />
            </div>
            <TextField
              label="Email"
              type="email"
              placeholder="johndoe@gmail.com"
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
