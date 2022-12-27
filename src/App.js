import { useState } from "react";
import { Routes, Route, Router } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import UploadEEG from "./pages/UploadEEG/UploadEEG";
import DoctorHeader from "./components/DoctorHeader/DoctorHeader";
import { useDispatch } from "react-redux";
import { logout } from "./slices/auth";
import CreatePatientModal from "./pages/Home/subpages/DoctorDashBoard/CreatePatientModal/CreatePatientModal";

const App = () => {
  const dispatch = useDispatch();
  const [showCreatePatientModal, setShowCreatePatientModal] = useState(false);

  const logoutHandler = () => {
    dispatch(logout());
  };

  const enterCreatePatientModal = () => {
    setShowCreatePatientModal(true);
  };

  const exitCreatePatientModal = () => {
    setShowCreatePatientModal(false);
  };

  return (
    <>
      <DoctorHeader
        logoutHandler={logoutHandler}
        enterCreatePatientModal={enterCreatePatientModal}
      />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/upload-eeg" element={<UploadEEG />} />
        <Route path="*" />
      </Routes>
      <CreatePatientModal
        show={showCreatePatientModal}
        handleClose={exitCreatePatientModal}
      />
    </>
  );
};
export default App;
