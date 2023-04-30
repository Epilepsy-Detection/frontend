import DoctorHeader from "../../components/DoctorHeader/DoctorHeader";
import useGetPatientProfile from "./hooks/useGetPatientProfile";
import styles from "./PatientProfile.module.css";

const PatientProfile = () => {
  const { patientProfile, loading, error } = useGetPatientProfile();
  return (
    <div className="background">
      <DoctorHeader />
      {patientProfile && (
        <main className={"main-bg " + styles.container}>
          <h1>{patientProfile.firstName + " " + patientProfile.lastName}</h1>
          <h2>Emergency Contacts:</h2>
          {patientProfile.emergencyContact &&
            patientProfile.emergencyContact.map((contact) => (
              <p>
                {contact.name} - {contact.phone}
              </p>
            ))}
        </main>
      )}
      {loading && <p>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default PatientProfile;
