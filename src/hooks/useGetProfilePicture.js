import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import patientService from "../services/patient_service";

const useGetProfilePicture = () => {
  const [profilePicture, setProfilePicture] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    setLoading(true);
    patientService
      .getProfilePicture(user.token, user.profilePicture)
      .then((response) => {
        setProfilePicture(response);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [user]);

  return { profilePicture, loading, error };
};

export default useGetProfilePicture;
