import { io } from "socket.io-client";
import instance from "./axios_service";
const startConnection = (token) => {
  const socket = io(process.env.REACT_APP_SOCKET_URL, {
    auth: { token: `Bearer ${token}` },
  });

  return socket;
};

export const getActivePatientsNames = async (patientsIds, token) => {
  let patientsNames = [];
  for (let i = 0; i < patientsIds.length; i++) {
    try {
      const response = await instance.get(`/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          profileId: patientsIds[i],
        },
      });

      patientsNames.push({
        value: patientsIds[i],
        label:
          response.data.profile.firstName +
          " " +
          response.data.profile.lastName,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return patientsNames;
};

export default startConnection;
