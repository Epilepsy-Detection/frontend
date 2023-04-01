import styles from "./DeleteButton.module.css";

const DeleteButton = ({ children, onClick, type, loading, className }) => (
  <button
    onClick={onClick}
    type={type}
    className={styles.button + " " + className}
  >
    {loading ? "Loading..." : children}
  </button>
);

export default DeleteButton;
