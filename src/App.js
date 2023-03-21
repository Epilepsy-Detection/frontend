import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import UploadEEG from "./pages/UploadEEG/UploadEEG";
import DoctorHeader from "./components/DoctorHeader/DoctorHeader";
import { useDispatch } from "react-redux";
import { logout } from "./slices/auth";
import CreatePatientModal from "./pages/Home/subpages/DoctorDashBoard/CreatePatientModal/CreatePatientModal";
import EditProfile from "./pages/EditProfile/EditProfile";
import EmergencyContacts from "./pages/EmergencyContacts/EmergencyContacts";
import AddEmergencyContact from "./pages/EmergencyContacts/AddEmergencyContact";



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
        <Route exact path="home">
          <Route index element={<Home />} />
          <Route exact path="upload-EEG" element={<UploadEEG />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route exact path="emergency-contacts">
            <Route index element={<EmergencyContacts />} />
            <Route path="add-emergency-contact" element={<AddEmergencyContact />} /> 
          </Route>   
        </Route>
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
