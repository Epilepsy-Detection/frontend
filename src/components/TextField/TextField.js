import styles from "./TextField.module.css";

const TextField = ({ label, onChange, type, placeholder, register, error }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        {...register}
        aria-invalid={register?.ref?.current?.validity?.valid}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default TextField;
