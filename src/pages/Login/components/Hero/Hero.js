import hero from "../../../../assets/brain_hero.png";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <section className={styles.hero}>
      <img className={styles["hero-img"]} src={hero} alt="Hero"></img>
    </section>
  );
};

export default Hero;
