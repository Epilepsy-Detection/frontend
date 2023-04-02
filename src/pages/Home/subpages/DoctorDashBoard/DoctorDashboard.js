import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "react-dropdown/style.css";
import { io } from "socket.io-client";
import styles from "./DoctorDashboard.module.css";
import { intToByte } from "../../../../utils/graph_utils";
import {
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ActivePatients from "./ActivePatients/ActivePatients";
import DoctorHeader from "../../../../components/DoctorHeader/DoctorHeader";

const DoctorDashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const [isConnected, setIsConnected] = useState(false);
  const [data, setData] = useState([]);
  const [resized, setResized] = useState(false);

  useEffect(() => {
    const socket = io(process.env.REACT_APP_SOCKET_URL, {
      auth: { token: `Bearer ${user.token}` },
    });

    socket.on("connect", () => {
      console.log("connected");
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      console.log("disconnected");
      setIsConnected(false);
    });

    socket.on("connect_error", (err) => {
      console.log(err);
      setIsConnected(false);
    });

    socket.on("connect_timeout", (err) => {
      console.log(err);
      setIsConnected(false);
    });

    socket.on("new-patient-message", (data) => {
      console.log("new message");
      setData((prevData) => {
        let newData = [...prevData];
        let lastName = prevData[prevData.length - 1]
          ? prevData[prevData.length - 1].name
          : 0;
        let newNames = [lastName];
        let dataArray = new Uint8Array(data);

        for (let i = 1; i < data.byteLength; i++) {
          newNames.push(newNames[i - 1] + 1);
          newData.push({
            name: newNames[i - 1] + 1,
            value: intToByte(dataArray[i]),
          });
        }

        if (newData.length > 100) {
          newData = newData.slice(newData.length - 100, newData.length);
        }

        return newData;
      });
    });

    window.addEventListener("resize", () => {
      setResized((prevResized) => !prevResized);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("connect_error");
      socket.off("connect_timeout");
      socket.off("new-patient-message");
    };
  }, []);

  return (
    <div className="background">
      <DoctorHeader />
      <main className="main-bg">
        <h1 className={styles["welcome-text"]}>Welcome Dr. {user.firstName}</h1>
        <ActivePatients />
        <LineChart
          width={window.innerWidth - 100}
          height={400}
          data={data}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis dataKey="value" />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Line
            type="monotone"
            isAnimationActive={false}
            dataKey="value"
            stroke="#ff7300"
            yAxisId={0}
          />
        </LineChart>
      </main>
    </div>
  );
};

export default DoctorDashboard;
