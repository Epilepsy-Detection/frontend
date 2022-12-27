import { useState, useEffect } from "react";
import patientService from "../../../services/patient_service";

const useCurrentPatients = (user) => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await patientService.getDoctorPatients(
          user.token,
          user.userId
        );
        setPatients(
          response["patients"].map((patient) => {
            return {
              value: patient._id,
              label: patient.firstName + " " + patient.lastName,
            };
          })
        );
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPatients();
  }, [user.userId, user.token]);

  return { patients, loading, error };
};

export default useCurrentPatients;
