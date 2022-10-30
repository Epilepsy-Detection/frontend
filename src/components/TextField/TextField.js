import styles from "./TextField.module.css";

const TextField = ({ label, onChange, type, placeholder }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;
