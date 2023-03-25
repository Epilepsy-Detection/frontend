import Button from "../../components/Button/Button";
import PatientHeader from "../../components/PatientHeader/PatientHeader";
import TextField from "../../components/TextField/TextField";
import { hideDropdown } from "../../utils/ui_functions";
import patientStyles from "../Home/subpages/PatientDashboard/PatientDashboard.module.css";
import styles from "./AddEmergencyContact.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import patientService from "../../services/patient_service";

const AddEmergencyContact = () => {
  const user = useSelector((state) => state.auth.user);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);
  const [phoneIsValid, setPhoneIsValid] = useState(true);


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
      if(!nameIsValid || name.length > 50){
        setMessage("Please enter a valid name");
        return;
      }
      if(!phoneIsValid){
        setMessage("Please enter a valid phone number");
        return;
      }
      if (name === "" || phone === "") {
        setMessage("Please fill all the fields");
        return;
      }

      const res = await patientService.addEmergencyContact(name, phone,user.token);
      console.log(res);
      if (res.status === 200) {
        setName("");
        setPhone("");
        setMessage("Contact added successfully");
      }
      else{
        setMessage("Something went wrong");
      }
    } catch (err) {
      console.log(err);
      if (err.response.status === 400){
        setMessage("You are allowed to only create 2 emergency contacts");
      }
    }
  };

  return (
    <div className={patientStyles.background}>
      <PatientHeader />
      <main className={patientStyles["main-bg"]} onClick={hideDropdown}>
        <h1>Add Emergency Contact</h1>
        <form className={styles["add-emergency-contact-form "]} onSubmit={handleSubmit}>
          <div className={styles["contact-details"]}>
            <div className={styles.name}>
              <TextField
                type="text"
                value={name}
                placeholder="Name"
                onChange={handleNameChange}
                required
              />
              <TextField
                type="phone"
                value={phone}
                placeholder="Phone"
                onChange={handlePhoneChange}
                required
              />
            </div>
            <Button className={styles.add} type = "submit">Add</Button>
            <div className="message">{message ? <p>{message}</p> : null}</div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default AddEmergencyContact;
