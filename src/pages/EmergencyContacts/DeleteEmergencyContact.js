import React, { useState } from "react";
// import "./styles.css";
import Select from "react-select";
import patientStyles from "../Home/subpages/PatientDashboard/PatientDashboard.module.css";
import PatientHeader from "../../components/PatientHeader/PatientHeader";
import { hideDropdown } from "../../utils/ui_functions";
import { useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import styles from "./deleteEmergencyContact.module.css";
import patientService from "../../services/patient_service";
import useEmergencyContacts from "./Hooks/use-emergency-contacts";



const DeleteEmergencyContact = ()=> {

  const user = useSelector((state) => state.auth.user);
  const { contacts, loading, error: fetchError } = useEmergencyContacts(user);
  const options = contacts.map((contact) => {
    return { value: contact.id, label: contact.name };
    });  

  const [selectedOption, setSelectedOption] = useState([]); //add initial state

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handleDelete = async () => {
    console.log(selectedOption);
    const res = await patientService.deleteEmergencyContact(selectedOption.value, user.token);
    console.log(res);
    if (res.status === 200) {
        setSelectedOption([]);
        alert("Contact deleted successfully");
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

    <div className={patientStyles.background}>
    <PatientHeader />
      <main className={patientStyles["main-bg"]} onClick={hideDropdown}>
        <h1>Delete Emergency Contact</h1>
        <Select
            value={selectedOption}
            onChange={handleChange}
            options={options}
            hideSelectedOptions={false}
            isSearchable
            filterOption={filterOptions}
        />
        <Button className={styles.add} onClick={handleDelete} >Delete</Button>
        </main>
    </div>
  );
}

export default DeleteEmergencyContact;