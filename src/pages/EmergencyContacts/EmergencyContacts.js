import Button from "../../components/Button/Button";
import PatientHeader from "../../components/PatientHeader/PatientHeader";
import { hideDropdown } from "../../utils/ui_functions";
import patientStyles from "../Home/subpages/PatientDashboard/PatientDashboard.module.css";
import styles from "./EmergencyContacts.module.css";
import { useNavigate } from "react-router-dom";

import ContactsTable from "./ContactsTable";



const EmergencyContacts = () => {
const navigate = useNavigate();

const navigateAddEmergencyContact = () => {
  navigate("/home/emergency-contacts/add-emergency-contact");
};
  return (
    <div className={styles.background}>
      <PatientHeader />
      <main className={patientStyles["main-bg"]} onClick={hideDropdown}>
      <h1>Emergency Contacts</h1>
      <ContactsTable />
      <Button className={styles.save} onClick={navigateAddEmergencyContact}>Add Emergency Contact </Button>
      </main>
    </div>
  );
};

export default EmergencyContacts;
