// TODO: ALLOW ACCESS TO THIS PAGE ONLY IF USER IS LOGGED IN
import Hero from "../../assets/brain_hero.png";
import styles from "./Home.module.css";
import { useSelector } from "react-redux";
import DoctorDashboard from "./subpages/DoctorDashBoard/DoctorDashboard";
import PatientDashboard from "./subpages/PatientDashboard/PatientDashboard";

const Home = () => {
  const role = useSelector((state) => state.auth.user.role);

  if (role === "patient") return <PatientDashboard />;
  else if (role === "doctor") return <DoctorDashboard />;
  else
    return (
      <div className={styles.container}>
        <h1>Welcome to Epilepsy Detection</h1>
        <img src={Hero} alt="brain" />
      </div>
    );
};

export default Home;
