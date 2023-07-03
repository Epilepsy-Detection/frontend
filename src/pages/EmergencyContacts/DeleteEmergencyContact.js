import React, { useState } from "react";
// import "./styles.css";
import Select from "react-select";
import PatientHeader from "../../components/PatientHeader/PatientHeader";
import { hideDropdown } from "../../utils/ui_functions";
import { useSelector } from "react-redux";
import DeleteButton from "../../components/Delete Button/DeleteButton";
import styles from "./deleteEmergencyContact.module.css";
import patientService from "../../services/patient_service";
import useEmergencyContacts from "./Hooks/use-emergency-contacts";

const DeleteEmergencyContact = () => {
  const user = useSelector((state) => state.auth.user);
  const { contacts } = useEmergencyContacts(user);
  const options = contacts.map((contact) => {
    return { value: contact.id, label: contact.name };
  });

  const [selectedOption, setSelectedOption] = useState([]); //add initial state

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handleDelete = async () => {
    console.log(selectedOption);
    if (selectedOption.length === 0) {
      alert("Please select a contact to delete");
      return;
    }
    if (selectedOption.length > 1) {
      alert("Please select only one contact to delete");
      return;
    }
    if (selectedOption) {
      const res = await patientService.deleteEmergencyContact(
        selectedOption.value,
        user.token
      );
      console.log(res);
      if (res.status === 200) {
        setSelectedOption([]);
        alert("Contact deleted successfully");
      }
    }
  };

  const filterOptions = (candidate, input) => {
    if (input) {
      if (candidate.label.toLowerCase().includes(input.toLowerCase()))
        return true;
      if (
        selectedOption.some((opt) => {
          if (opt.value === candidate.value) return true;
          else return false;
        })
      )
        return true;
      return false;
    }
    return true;
  };

  return (
    <div className="background">
      <PatientHeader />
      <main className="main-bg" onClick={hideDropdown}>
        <h1>Delete Emergency Contact</h1>
        <div className={styles["delete-contact"]}>
          <Select
            value={selectedOption}
            onChange={handleChange}
            options={options}
            hideSelectedOptions={false}
            isSearchable
            filterOption={filterOptions}
          />
          <DeleteButton className={styles.add} onClick={handleDelete}>
            Delete
          </DeleteButton>
        </div>
      </main>
    </div>
  );
};

export default DeleteEmergencyContact;
