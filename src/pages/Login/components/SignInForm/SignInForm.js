import Button from "../../../../components/Button/Button";
import SignUp from "../../components/SignUp/SignUp";
import TextField from "../../../../components/TextField/TextField";
import CheckBox from "../../../../components/CheckBox/CheckBox";
import styles from "./SignInForm.module.css";

const SignInForm = () => {
  return (
    <section className={styles.form}>
      <h1>Sign In</h1>
      <form>
        <TextField label="Email" type="email" placeholder="hi@example.com" />
        <TextField label="Password" type="password" placeholder="password" />
        <CheckBox label="Remember Me" />
        <Button type="submit">Sign In</Button>
        <SignUp />
      </form>
    </section>
  );
};

export default SignInForm;
