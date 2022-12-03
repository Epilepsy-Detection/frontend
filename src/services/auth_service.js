import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const register = async (email, password, firstName, lastName) => {
  const response = await axios.post(API_URL + "register", {
    email,
    password,
    firstName,
    lastName,
  });

  return response.data;
};

const login = async (email, password) => {
  console.log(email, password);
  const response = await axios.post(API_URL + "login", {
    email,
    password,
  });

  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default authService;
