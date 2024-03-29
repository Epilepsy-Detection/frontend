import Button from "../../components/Button/Button";
import PatientHeader from "../../components/PatientHeader/PatientHeader";
import { hideDropdown } from "../../utils/ui_functions";
import styles from "./EmergencyContacts.module.css";
import { useNavigate } from "react-router-dom";
import DeleteButton from "../../components/Delete Button/DeleteButton";
import ContactsTable from "./ContactsTable";

const EmergencyContacts = () => {
  const navigate = useNavigate();

  const navigateAddEmergencyContact = () => {
    navigate("/home/emergency-contacts/add-emergency-contact");
  };
  const navigateDeleteEmergencyContact = () => {
    navigate("/home/emergency-contacts/delete-emergency-contact");
  };
  return (
    <div className="background">
      <PatientHeader />
      <main className="main-bg" onClick={hideDropdown}>
        <h1>Emergency Contacts</h1>
        <div className={styles["add-contact"]}>
          <ContactsTable />
          <Button className={styles.add} onClick={navigateAddEmergencyContact}>
            Add Contact{" "}
          </Button>
          <DeleteButton
            className={styles.add}
            onClick={navigateDeleteEmergencyContact}
          >
            Delete Contact{" "}
          </DeleteButton>
        </div>
      </main>
    </div>
  );
};

export default EmergencyContacts;
