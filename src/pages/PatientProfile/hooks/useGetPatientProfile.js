import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import profileService from "../../../services/profile_service";
import { useSelector } from "react-redux";

const useGetPatientProfile = () => {
  const { patientId } = useParams();

  const [loading, setLoading] = useState(false);
  const [patientProfile, setPatientProfile] = useState(null);
  const [error, setError] = useState(null);
  const token = useSelector((state) => state.auth.user.token);

  useEffect(() => {
    const getPatientProfile = async () => {
      setLoading(true);
      try {
        const response = await profileService.getUserProfile(patientId, token);
        setPatientProfile(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getPatientProfile();
  }, [patientId, token, setLoading, setPatientProfile, setError]);

  return { patientProfile, loading, error };
};

export default useGetPatientProfile;
