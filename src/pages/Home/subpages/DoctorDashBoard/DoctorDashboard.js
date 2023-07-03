import { useEffect, useState } from "react";
import useGetActivePatients from "./ActivePatients/hooks/useGetActivePatients";
import "react-dropdown/style.css";
import styles from "./DoctorDashboard.module.css";
import {
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Label,
} from "recharts";
import ActivePatients from "./ActivePatients/ActivePatients";
import DoctorHeader from "../../../../components/DoctorHeader/DoctorHeader";

const DoctorDashboard = () => {
  const [, setResized] = useState(false);
  const { activePatients, data, associatePatient } = useGetActivePatients();

  useEffect(() => {
    window.addEventListener("resize", () => {
      setResized((prevResized) => !prevResized);
    });
  }, []);

  return (
    <div className="background">
      <DoctorHeader />
      <main className="main-bg">
        <ActivePatients
          activePatients={activePatients}
          associatePatient={associatePatient}
        />
        <LineChart
          width={window.innerWidth - 160}
          height={400}
          data={data}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <XAxis dataKey="name">
            <Label value="Time (msec)" position="top" />
          </XAxis>
          <YAxis dataKey="value">
            <Label
              value="Amplitude (mV)"
              position={{
                x: 190,
                y: 10,
              }}
            />
          </YAxis>
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Line
            type="monotone"
            isAnimationActive={false}
            dataKey="value"
            stroke="#ff7300"
            yAxisId={0}
            dot={false}
          />
        </LineChart>
      </main>
    </div>
  );
};

export default DoctorDashboard;
