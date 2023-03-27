import Button from "../../components/Button/Button";
import PatientHeader from "../../components/PatientHeader/PatientHeader";
import TextField from "../../components/TextField/TextField";
import { hideDropdown } from "../../utils/ui_functions";
import patientStyles from "../Home/subpages/PatientDashboard/PatientDashboard.module.css";
import styles from "./AddEmergencyContact.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import patientService from "../../services/patient_service";
import { useRef } from "react";

const AddEmergencyContact = () => {
  const user = useSelector((state) => state.auth.user);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);
  const [phoneIsValid, setPhoneIsValid] = useState(true);
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const formRef = useRef(null);


  const validateInput = (value) => {
    const regex = /^[a-zA-Z\s]*$/;
    return regex.test(value);
  };
  const validatePhone= (inputPhone) => {
    const phonePattern = /^(\+|\d)[0-9]{7,16}$/;
    return phonePattern.test(inputPhone);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameIsValid(validateInput(event.target.value));
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    setPhoneIsValid(validatePhone(event.target.value));
  };



  let handleSubmit = async (e) => {
    console.log(name);
    console.log(phone);
    e.preventDefault();
    try {
      if (name === "" || phone === "") {
        setNameError("name is required");
        setPhoneError("phone is required");
        return;
      }
      if(!nameIsValid || name.length > 50){
        setNameError("Please enter a valid name");
        return;
      }
      if(!phoneIsValid){
        setPhoneError("Please enter a valid phone number");
        return;
      }
      

      const res = await patientService.addEmergencyContact(name, phone,user.token);
      console.log(res);
      if (res.status === 200) {
        alert("Contact added successfully");
        formRef.current.reset();
        setNameError("");
        setPhoneError("");
        setName("");
        setPhone("");
      }
      else{
        alert("Something went wrong");
      }
    } catch (err) {
      console.log(err);
      if (err.response.status === 400){
        alert("You are allowed to only create 2 emergency contacts");
      }
    }
  };

  return (
    <div className={patientStyles.background}>
      <PatientHeader />
      <main className={patientStyles["main-bg"]} onClick={hideDropdown}>
        <h1>Add Emergency Contact</h1>
        <form className={styles["add-emergency-contact-form "]} onSubmit={handleSubmit} ref={formRef}>
          <div className={styles["contact-details"]}>
            <div className={styles.name}>
              <TextField
                type="text"
                value={name}
                placeholder="Name"
                onChange={handleNameChange}
                required
                error={nameError}
              />
              <TextField
                type="phone"
                value={phone}
                placeholder="Phone"
                onChange={handlePhoneChange}
                required
                error={phoneError}
              />
            </div>
            <Button className={styles.add} type = "submit">Add</Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default AddEmergencyContact;
