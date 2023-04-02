import { BsPersonFill } from "react-icons/bs";
import Button from "../../components/Button/Button";
import PatientHeader from "../../components/PatientHeader/PatientHeader";
import TextField from "../../components/TextField/TextField";
import { hideDropdown } from "../../utils/ui_functions";
import styles from "./EditProfile.module.css";
import { useSelector } from "react-redux";
import { useRef } from "react";
import useEditProfile from "./hooks/use-edit-profile";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const EditProfile = () => {
  const fileInput = useRef(null);
  const { changeIcon, changePassword } = useEditProfile();

  const formSchema = Yup.object().shape({
    oldPassword: Yup.string().required("Old password is required"),
    newPassword: Yup.string().required("New password is required"),
  });

  const formOptions = { resolver: yupResolver(formSchema) };

  const { register, handleSubmit } = useForm(formOptions);

  const handleFileChange = (e) => {
    const newPicture = e.target.files[0];
    changeIcon(newPicture);
  };

  const handleIconChange = (e) => {
    e.preventDefault();
    fileInput.current.click();
  };

  const handleSavePasswordClick = (data) => {
    changePassword(data.oldPassword, data.newPassword);
  };

  const user = useSelector((state) => state.auth.user);
  return (
    <div className="background">
      <PatientHeader />
      <main className="main-bg" onClick={hideDropdown}>
        <h1>Edit Profile</h1>
        <form
          className={styles["edit-profile-form"]}
          onSubmit={handleSubmit(handleSavePasswordClick)}
        >
          <div className={styles["change-pfp"]}>
            <div className={styles.pfp}>
              <BsPersonFill size={100} />
            </div>
            <input
              style={{ display: "none" }}
              ref={fileInput}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
            <button
              type="file"
              className={styles["change-pfp-btn"]}
              onClick={handleIconChange}
            >
              Edit Icon
            </button>
            <button className={styles["change-pfp-btn"]}>Remove Icon</button>
          </div>
          <div className={styles.separator}></div>
          <div className={styles["profile-details"]}>
            <div className={styles.name}>
              <TextField
                label="First Name"
                type="text"
                placeholder={user.firstName}
                readOnly
              />
              <TextField
                label="Last Name"
                type="text"
                placeholder={user.lastName}
                readOnly
              />
            </div>
            <TextField
              label="Email"
              type="email"
              placeholder={user.email}
              readOnly
            />
            <TextField
              label="Password"
              type="password"
              placeholder="Old Password"
              register={{ ...register("oldPassword") }}
            />
            <TextField
              type="password"
              placeholder="New Password"
              register={{ ...register("newPassword") }}
            />
            <Button type="submit" className={styles.save}>
              Save
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default EditProfile;
