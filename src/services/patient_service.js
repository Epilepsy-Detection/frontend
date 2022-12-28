import instance from "./axios_service";

const createPatient = async ({
  email,
  password,
  firstName,
  lastName,
  token,
}) => {
  const response = await instance.post(
    "/patient",
    {
      email,
      password,
      firstName,
      lastName,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

const getDoctorPatients = async (token, doctorProfileId) => {
  const response = await instance.get(`/profile/associatedPatients`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      profileId: doctorProfileId,
    },
  });
  return response.data;
};

const patientService = {
  createPatient,
  getDoctorPatients,
};

export default patientService;
