import styles from "../components/PatientHeader/PatientHeader.module.css";

const hideDropdown = () => {
  const dropdown = document.querySelector(`.${styles.dropdown}`);
  if (!dropdown.classList.contains(styles["hide"])) {
    dropdown.classList.add(styles["hide"]);
  }
};

export { hideDropdown };
