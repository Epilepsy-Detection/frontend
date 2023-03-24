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
  let formData = new FormData();
  formData.append("image", picture);

  const response = await instance.post(`/profile/picture`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
  if (response.status === 204 || response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.error.message);
  }
};

  const getEmergencyContacts = async (token) => {
    const response = await instance.get(`/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.profile.emergencyContact;
  };

  const addEmergencyContact = async (name, phone, token) => {
    console.log(name);
    console.log(phone);
    const response = await instance.post("/patient/emergencyContact", {
      "name": name,
      "phone": phone
    },{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    return response;
  };

const patientService = {
  createPatient,
  getDoctorPatients,
  changeProfilePicture,
  getEmergencyContacts,
  addEmergencyContact

};

export default patientService;
