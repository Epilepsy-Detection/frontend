import { useState } from "react";
import patientService from "../../../services/patient_service";
import authService from "../../../services/auth_service";
import { useSelector } from "react-redux";

function useEditProfile() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = useSelector((state) => state.auth.user.token);

  async function changeIcon(newPicture) {
    setIsLoading(true);
    setError(null);
    try {
      await patientService.changeProfilePicture(token, newPicture);
      setIsLoading(false);

      alert("Profile picture changed successfully");
    } catch (err) {
      console.log(err);
      setError(err.message);
      setIsLoading(false);
    }
  }

  async function changePassword(oldPassword, newPassword) {
    setIsLoading(true);
    setError(null);
    try {
      await authService.changePassword(token, oldPassword, newPassword);
      setIsLoading(false);
      alert("Password changed successfully");
    } catch (err) {
      console.log(err);
      setError(err.message);
      setIsLoading(false);
    }
  }

  return { isLoading, error, changeIcon, changePassword };
}

export default useEditProfile;
