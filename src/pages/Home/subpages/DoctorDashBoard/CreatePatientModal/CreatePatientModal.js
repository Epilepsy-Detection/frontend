import Modal from "react-bootstrap/Modal";
import TextField from "../../../../../components/TextField/TextField";
import Button from "../../../../../components/Button/Button";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import styles from "./CreatePatientModal.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const CreatePatientModal = ({ show, handleClose }) => {
  const formSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formOptions = { resolver: yupResolver(formSchema) };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(formOptions);

  const createUser = () => {};
  return (
    <Modal
      fade={false}
      show={show}
      onHide={handleClose}
      className={styles.modal}
    >
      <Modal.Header className={styles["modal-header"]} closeButton>
        <Modal.Title>Create Patient</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(createUser)}>
          <TextField
            label="First Name"
            placeholder="John"
            error={errors.firstName?.message}
            register={{ ...register("firstName") }}
          ></TextField>
          <TextField
            label="Last Name"
            placeholder="Doe"
            error={errors.lastName?.message}
            register={{ ...register("lastName") }}
          ></TextField>
          <TextField
            label="Email"
            placeholder="johndoe@gmail.com"
            type="email"
            error={errors.email?.message}
            register={{ ...register("email") }}
          ></TextField>
          <TextField
            label="Password"
            placeholder="Doe"
            type="password"
            error={errors.password?.message}
            register={{ ...register("password") }}
          ></TextField>
          <Button type="submit">Create Patient</Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default CreatePatientModal;
