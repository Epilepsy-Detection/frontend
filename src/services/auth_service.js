import axios from "axios";

const API_URL = "http://localhost:9000/api/v1/auth/";

const register = async (email, password, firstName, lastName) => {
  const response = await axios.post(API_URL + "register", {
    email,
    password,
    firstName,
    lastName,
  });

  console.log(response.data);
  localStorage.setItem("user", JSON.stringify(response.data));
};

const login = async (email, password) => {
  const response = await axios.post(API_URL + "login", {
    email,
    password,
  });
  console.log(response.data);
  localStorage.setItem("user", JSON.stringify(response.data));
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
