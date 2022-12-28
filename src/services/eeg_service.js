import instance from "./axios_service";

const getEEGResultsFromFile = async (file, patientId, doctorToken) => {
  const formData = new FormData();
  formData.append("signal", file);
  formData.append("patientId", patientId);
  const response = await instance.post(`/report`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${doctorToken}`,
    },
  });

  return response.data["report"];
};

const eegService = {
  getEEGResultsFromFile,
};

export default eegService;
