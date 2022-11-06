// TODO: ALLOW ACCESS TO THIS PAGE ONLY IF USER IS LOGGED IN
import Hero from "../../assets/brain_hero.png";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to Epilepsy Detection</h1>
      <img src={Hero} alt="brain" />
    </div>
  );
};

export default Home;
