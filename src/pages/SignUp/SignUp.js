import styles from "./SignUp.module.css";
import Hero from "../Login/components/Hero/Hero";
import SignUpForm from "./components/SignUpForm/SignUpForm";
const SignUp = () => {
  return (
    <div className={styles.signup}>
      <Hero />
      <SignUpForm />
    </div>
  );
};

export default SignUp;
