import { useState } from "react";
import eegService from "../../../services/eeg_service";

const useEEGResults = () => {
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getResults = async (file, selectedPatient, user) => {
    setLoading(true);
    try {
      const data = await eegService.getEEGResultsFromFile(
        file,
        selectedPatient,
        user.token
      );
      setError(null);
      setResults(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const clearResults = () => {
    setResults(null);
  };

  return { results, error, loading, getResults, clearResults };
};

export default useEEGResults;
