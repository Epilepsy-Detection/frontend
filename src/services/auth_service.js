import instance from "./axios_service";

const register = async (email, password, firstName, lastName) => {
  const response = await instance.post("/auth/register", {
    email,
    password,
    firstName,
    lastName,
  });

  return response.data;
};

const login = async (email, password) => {
  const response = await instance.post("/auth/login", {
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

const changePassword = async (token, oldPassword, newPassword) => { 
  const response = await instance.put(`/auth/password`, {
    oldPassword,
    newPassword,
  }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}


const authService = {
  register,
  login,
  logout,
  getCurrentUser,
  changePassword
};

export default authService;
