import PatientHeader from "../../components/PatientHeader/PatientHeader";
import { hideDropdown } from "../../utils/ui_functions";
import patientStyles from "../Home/subpages/PatientDashboard/PatientDashboard.module.css";
import styles from "./EditProfile.module.css";

const EditProfile = () => {
  return (
    <div className={patientStyles.background}>
      <PatientHeader />
      <main className={patientStyles["main-bg"]} onClick={hideDropdown}>
        <h1>Edit Profile</h1>
        <form className={styles["edit-profile-form"]}></form>
      </main>
    </div>
  );
};

export default EditProfile;
