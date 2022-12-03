import styles from "./Button.module.css";

const Button = ({ children, onClick, type, loading }) => (
  <button onClick={onClick} type={type} className={styles.button}>
    {loading ? "Loading..." : children}
  </button>
);

export default Button;
