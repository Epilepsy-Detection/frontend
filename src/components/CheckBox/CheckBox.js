import styles from "./CheckBox.module.css";
const CheckBox = ({ label, isSelected, onCheckboxChange }) => (
  <div className="checkbox">
    <input
      className={styles.checkbox}
      type="checkbox"
      name={label}
      checked={isSelected}
      onChange={onCheckboxChange}
    />
    <label className={styles.checkbox}>{label}</label>
  </div>
);

export default CheckBox;
