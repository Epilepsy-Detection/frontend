import { useState, useEffect } from "react";
import patientService from "../../../services/patient_service";


const useEmergencyContacts = (user) => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchContacts = async () => {
        try {
            const response = await patientService.getEmergencyContacts(
            user.token
            );
            setContacts(
            response.map((contact) => {
                return {
                id: contact._id,    
                name: contact.name,
                phone: contact.phone,
                };
            })
            );
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
        };

        fetchContacts();        
    }, [user.token]);
    
    return { contacts, loading, error };
    };

export default useEmergencyContacts;
