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

const changeProfilePicture = async (token, picture) => {
  const formData = new FormData();
  formData.append('profilePicture', picture);

  const response = await instance.put(`/profile/picture`, formData, {
         headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
         },
      });
      return response.data;
  }

const patientService = {
  createPatient,
  getDoctorPatients,
  changeProfilePicture
};

export default patientService;
