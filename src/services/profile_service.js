import instance from "./axios_service";

const getUserProfile = async (profileId, token) => {
  const response = await instance.get(`/profile/${profileId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.patient;
};

const profileService = {
  getUserProfile,
};

export default profileService;
