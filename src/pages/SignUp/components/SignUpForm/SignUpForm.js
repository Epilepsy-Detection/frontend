import { useState } from "react";
import Button from "../../../../components/Button/Button";
import TextField from "../../../../components/TextField/TextField";
import CheckBox from "../../../../components/CheckBox/CheckBox";
import styles from "./SignUpForm.module.css";
import Login from "../Login/Login";
import { useNavigate } from "react-router-dom";
import { register as authRegister } from "../../../../slices/auth";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const SignUpForm = () => {
  const formSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const formOptions = { resolver: yupResolver(formSchema) };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(formOptions);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const dispatch = useDispatch();

  function onSubmit(data) {
    setLoading(true);
    dispatch(
      authRegister({
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
      })
    )
      .unwrap()
      .then(() => {
        navigate("/home");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  return (
    <section className={styles.form}>
      <h1>Create an Account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.name}>
          <TextField
            label="First Name"
            placeholder="John"
            register={{ ...register("firstName") }}
            error={errors.firstName?.message}
          />
          <TextField
            label="Last Name"
            placeholder="Doe"
            register={{ ...register("lastName") }}
            error={errors.lastName?.message}
          />
        </div>
        <TextField
          label="Email"
          type="email"
          placeholder="hi@example.com"
          register={{ ...register("email") }}
          error={errors.email?.message}
        />
        <TextField
          label="Password"
          type="password"
          placeholder="password"
          register={{ ...register("password") }}
          error={errors.password?.message}
        />
        <TextField
          label="Confirm Password"
          type="password"
          placeholder="password"
          register={{ ...register("confirmPassword") }}
          error={errors.confirmPassword?.message}
        />
        <CheckBox
          label="Remember Me"
          onCheckboxChange={handleRememberMeChange}
          checked={rememberMe}
        />
        <Button type="submit" loading={loading}>
          Sign Up
        </Button>
        <Login />
      </form>
    </section>
  );
};

export default SignUpForm;
