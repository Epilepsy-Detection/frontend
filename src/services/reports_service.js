import instance from "./axios_service";

const getPatientReports = async (token) => {
  const response = await instance.get(`/report`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.data.success) {
    throw new Error(response.message);
  }
  return response.data.reports;
};

const getDoctorReports = async (token) => {
  const response = await instance.get(`/report/patient`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.data.success) {
    throw new Error(response.message);
  }
  return response.data.reports;
};

const reportService = {
  getPatientReports,
  getDoctorReports,
};

export default reportService;
