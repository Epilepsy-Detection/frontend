import styles from "./Button.module.css";

const Button = ({ children, onClick, type }) => (
  <button onClick={onClick} type={type} className={styles.button}>
    {children}
  </button>
);

export default Button;
