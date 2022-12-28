import styles from "./Button.module.css";

const Button = ({ children, onClick, type, loading, className }) => (
  <button
    onClick={onClick}
    type={type}
    className={styles.button + " " + className}
  >
    {loading ? "Loading..." : children}
  </button>
);

export default Button;
