import { Link } from "react-router-dom";
import styles from "./Home.module.css";

// TODO: Style this page
const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Epilepsy Detection using EEG</h1>
      <h3>Welcome</h3>
      <p>Please Login or Sign up to Continue</p>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default Home;
