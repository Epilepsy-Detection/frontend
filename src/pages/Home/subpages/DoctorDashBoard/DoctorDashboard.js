import { useSelector } from "react-redux";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const DoctorDashboard = () => {
  const user = useSelector((state) => state.auth.user);

  const options = ["one", "two", "three"];
  const defaultOption = options[0];

  return (
    <>
      <h1>Welcome Dr. {user.firstName}</h1>
      <button>Create Patient</button>
      <div>
        <p>Select Active Patient:</p>
        <Dropdown
          options={options}
          value={defaultOption}
          placeholder="Select an option"
        />
      </div>
    </>
  );
};

export default DoctorDashboard;
