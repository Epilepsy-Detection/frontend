import { useState } from "react";
import Button from "../../../../components/Button/Button";
import TextField from "../../../../components/TextField/TextField";
import CheckBox from "../../../../components/CheckBox/CheckBox";
import styles from "./SignUpForm.module.css";
import Login from "../Login/Login";
import { Navigate, useNavigate } from "react-router-dom";
import { register } from "../../../../slices/auth";
import { useDispatch } from "react-redux";

const SignUpForm = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(email, password);
    dispatch(register({ email, password, firstName, lastName }))
      .unwrap()
      .then(() => {
        navigate("/home");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  return (
    <section className={styles.form}>
      <h1>Create an Account</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.name}>
          <TextField
            label="First Name"
            placeholder="John"
            onChange={handleFirstNameChange}
            value={firstName}
          />
          <TextField
            label="Last Name"
            placeholder="Doe"
            onChange={handleLastNameChange}
            value={lastName}
          />
        </div>
        <TextField
          label="Email"
          type="email"
          placeholder="hi@example.com"
          onChange={handleEmailChange}
          value={email}
        />
        <TextField
          label="Password"
          type="password"
          placeholder="password"
          onChange={handlePasswordChange}
          value={password}
        />
        <TextField
          label="Confirm Password"
          type="password"
          placeholder="password"
          onChange={handleConfirmPasswordChange}
          value={confirmPassword}
        />
        <CheckBox
          label="Remember Me"
          onCheckboxChange={handleRememberMeChange}
          checked={rememberMe}
        />
        <Button type="submit">Sign Up</Button>
        <Login />
      </form>
    </section>
  );
};

export default SignUpForm;
