import Button from "../../../../components/Button/Button";
import TextField from "../../../../components/TextField/TextField";
import CheckBox from "../../../../components/CheckBox/CheckBox";
import styles from "./SignUpForm.module.css";
import Login from "../Login/Login";

const SignUpForm = () => {
  return (
    <section className={styles.form}>
      <h1>Create an Account</h1>
      <form>
        <TextField label="Email" type="email" placeholder="hi@example.com" />
        <TextField label="Password" type="password" placeholder="password" />
        <TextField
          label="Confirm Password"
          type="password"
          placeholder="password"
        />
        <CheckBox label="Remember Me" />
        <Button type="submit">Sign Up</Button>
        <Login />
      </form>
    </section>
  );
};

export default SignUpForm;
