import styles from "./Login.module.css";
import Hero from "./components/Hero/Hero";
import SignInForm from "./components/SignInForm/SignInForm";

const Login = () => {
  return (
    <div className={styles.login}>
      <Hero />
      <SignInForm />
    </div>
  );
};

export default Login;
