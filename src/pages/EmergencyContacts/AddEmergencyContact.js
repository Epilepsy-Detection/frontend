import { BsPersonFill } from "react-icons/bs";
import Button from "../../components/Button/Button";
import PatientHeader from "../../components/PatientHeader/PatientHeader";
import TextField from "../../components/TextField/TextField";
import { hideDropdown } from "../../utils/ui_functions";
import patientStyles from "../Home/subpages/PatientDashboard/PatientDashboard.module.css";
import styles from "./AddEmergencyContact.module.css";

const AddEmergencyContact = () => {
  return (
    <div className={patientStyles.background}>
      <PatientHeader />
      <main className={patientStyles["main-bg"]} onClick={hideDropdown}>
        <h1>Add Emergency Contact</h1>
        <form className={styles["add-emergency-contact-form "]}>
          <div className={styles["contact-details"]}>
            <div className={styles.name}>
              <TextField
                label="Name"
                type="text"
                placeholder="John doe"
                // readOnly
              />
              <TextField
                label="Phone Number"
                type="phone"
                placeholder="+1 123 456 7890"
                // readOnly
              />
            </div>
            <Button className={styles.add}>Add</Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default AddEmergencyContact;
