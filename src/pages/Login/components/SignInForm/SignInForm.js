import { useState } from "react";
import Button from "../../../../components/Button/Button";
import SignUp from "../../components/SignUp/SignUp";
import TextField from "../../../../components/TextField/TextField";
import CheckBox from "../../../../components/CheckBox/CheckBox";
import styles from "./SignInForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../../../slices/auth";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const SignInForm = () => {
  const formSchema = Yup.object().shape({
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

  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    setLoading(true);
    dispatch(login({ email: data.email, password: data.password }))
      .unwrap()
      .then(() => {
        navigate("/home");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  return (
    <section className={styles.form}>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Email"
          type="email"
          placeholder="hi@example.com"
          error={errors.email?.message}
          register={{ ...register("email") }}
        />
        <TextField
          label="Password"
          type="password"
          placeholder="password"
          error={errors.password?.message}
          register={{ ...register("password") }}
        />
        <CheckBox
          label="Remember Me"
          onCheckboxChange={handleRememberMeChange}
          value={rememberMe}
        />
        <Button type="submit">Sign In</Button>
        <SignUp />
      </form>
    </section>
  );
};

export default SignInForm;
