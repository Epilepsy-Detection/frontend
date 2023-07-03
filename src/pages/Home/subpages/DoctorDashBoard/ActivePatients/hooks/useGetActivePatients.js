import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { getActivePatientsNames } from "../../../../../../services/real_time_service";
import { intToByte } from "../../../../../../utils/graph_utils";
import startConnection from "../../../../../../services/real_time_service";

const useGetActivePatients = () => {
  const [activePatients, setActivePatients] = useState([]);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const token = useSelector((state) => state.auth.user.token);
  const socket = startConnection(token);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
      socket.emit("get_active_patients");
    });

    socket.on("active_patients_result", async (patientsIds) => {
      if (patientsIds) {
        for (let i = 0; i < patientsIds.length; i++) {
          socket.emit("associate_patient", patientsIds[i]);
        }

        const patientsNames = await getActivePatientsNames(patientsIds, token);
        setActivePatients(patientsNames);
      }
    });

    socket.on("new-patient-message", (data) => {
      console.log("new message");
      setData((prevData) => {
        console.log(prevData);
        let newData = [...prevData];
        let lastName = prevData[prevData.length - 1]
          ? prevData[prevData.length - 1].name
          : 0;
        let newNames = [lastName];
        let dataArray = new Uint8Array(data);

        for (let i = 1; i < data.byteLength; i++) {
          newNames.push(Math.round((newNames[i - 1] + 0.192) * 100) / 100);
          newData.push({
            name: newNames[i - 1] + 1,
            value: intToByte(dataArray[i]),
          });
        }

        if (newData.length > 511 * 3) {
          newData = newData.slice(newData.length - 511 * 3, newData.length);
        }

        return newData;
      });
    });

    socket.on("disconnect", () => {
      console.log("disconnected successfully!");
    });

    socket.on("connect_error", (err) => {
      console.log("Failed to connect", err);
      setError(true);
    });
  }, [token]);

  const associatePatient = (patientId) => {
    // socket.emit("associate_patient", patientId);
    console.log("patient associated");
  };

  return { activePatients, data, error, associatePatient };
};

export default useGetActivePatients;
