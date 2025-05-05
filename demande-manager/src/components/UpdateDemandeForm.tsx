import { useState, useEffect } from 'react';
import { updateDemande } from '../services/demandeService';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateDemandeForm = () => {
  const { demandeId } = useParams<{ demandeId: string }>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    designation: '',
    quantite: 0,
    status: '',
  });

  useEffect(() => {
    // Fetch demande by ID
    axios.get(`http://localhost:4848/api/v1/demandes/dm/${demandeId}`)
      .then(response => {
        setFormData(response.data);
      })
      .catch(error => {
        console.error('Error fetching demande:', error);
      });
  }, [demandeId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateDemande(demandeId!, formData);
      navigate('/'); // b3d lupdate, redirect l'affichage
    } catch (error) {
      console.error('Error updating demande:', error);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Update Demande</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="designation"
          value={formData.designation}
          onChange={handleChange}
          placeholder="Designation"
          className="w-full p-2 border rounded"
        />
        <input
          name="quantite"
          type="number"
          value={formData.quantite}
          onChange={handleChange}
          placeholder="Quantite"
          className="w-full p-2 border rounded"
        />
        <input
          name="status"
          value={formData.status}
          onChange={handleChange}
          placeholder="Status"
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateDemandeForm;
