import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import UploadEEG from "./pages/UploadEEG/UploadEEG";
import EditProfile from "./pages/EditProfile/EditProfile";
import EmergencyContacts from "./pages/EmergencyContacts/EmergencyContacts";
import AddEmergencyContact from "./pages/EmergencyContacts/AddEmergencyContact";
import Reports from "./pages/Home/subpages/DoctorDashBoard/Reports/Reports";
import DeleteEmergencyContact from "./pages/EmergencyContacts/DeleteEmergencyContact";
import PatientProfile from "./pages/PatientProfile/PatientProfile";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route exact path="home">
          <Route index element={<Home />} />
          <Route exact path="upload-EEG" element={<UploadEEG />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="reports" element={<Reports />} />
          <Route path="reports/:patientId" element={<PatientProfile />} />
          <Route exact path="emergency-contacts">
            <Route index element={<EmergencyContacts />} />
            <Route
              path="add-emergency-contact"
              element={<AddEmergencyContact />}
            />
            <Route
              path="delete-emergency-contact"
              element={<DeleteEmergencyContact />}
            />
          </Route>
        </Route>
        <Route path="*" />
      </Routes>
    </>
  );
};
export default App;
