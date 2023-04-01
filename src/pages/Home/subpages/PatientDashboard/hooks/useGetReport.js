import { useState, useEffect } from "react";
import reportService from "../../../../../services/reports_service";
import { useSelector } from "react-redux";

const useGetReport = () => {
  const [report, setReport] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = useSelector((state) => state.auth.user.token);

  useEffect(() => {
    setLoading(true);
    reportService
      .getPatientReports(token)
      .then((response) => {
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

export default useGetReport;
