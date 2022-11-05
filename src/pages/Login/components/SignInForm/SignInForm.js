import { useState } from "react";
import Button from "../../../../components/Button/Button";
import SignUp from "../../components/SignUp/SignUp";
import TextField from "../../../../components/TextField/TextField";
import CheckBox from "../../../../components/CheckBox/CheckBox";
import styles from "./SignInForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../../../slices/auth";
import { Navigate, useNavigate } from "react-router-dom";

const SignInForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(login(email, password))
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

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  return (
    <section className={styles.form}>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
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
        <CheckBox
          label="Remember Me"
          onCheckboxChange={handleRememberMeChange}
          value={rememberMe}
        />
        <Button type="submit">Sign In</Button>
        <SignUp />
      </form>
    </section>
  );
};

export default SignInForm;
