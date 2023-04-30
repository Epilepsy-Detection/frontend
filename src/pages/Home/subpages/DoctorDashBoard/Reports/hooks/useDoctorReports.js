import { useState, useEffect } from "react";
import reportService from "../../../../../../services/reports_service";
import { useSelector } from "react-redux";

const useDoctorReports = () => {
  const [report, setReport] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = useSelector((state) => state.auth.user.token);

  useEffect(() => {
    setLoading(true);
    reportService
      .getDoctorReports(token)
      .then((response) => {
        response.forEach((report) => {
          report._patientId = {
            name:
              report._patientId.firstName + " " + report._patientId.lastName,
            _id: report._patientId._id,
          };
        });
        setReport(response);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [token]);

  return { report, loading, error };
};

export default useDoctorReports;
