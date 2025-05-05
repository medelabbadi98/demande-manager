import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const [demandes, setDemandes] = useState<Demande[]>([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    axios.get('http://localhost:4849/api/v1/demandes')
      .then((res) => {
        setDemandes(res.data);
      })
      .catch((err) => {
        console.error('Error fetching demandes', err);
      });
  }, []);

  const handleDelete = (id: string) => {
    if (!confirm("Tu es sûr de vouloir supprimer cette demande ?")) return;
  
    axios.delete(`http://localhost:4849/api/v1/demandes/demande/${id}`)
      .then(() => {
        setDemandes(prev => prev.filter(d => d.id !== id));
      })
      .catch((err) => {
        console.error("Erreur lors de la suppression", err);
      });
  };
  
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Liste des Demandes</h1>
      <div className="space-y-4">
        {demandes.map((demande: any) => (
          <div key={demande.id} className="p-4 bg-gray-100 rounded-lg shadow">
            <p><strong>Designation:</strong> {demande.designation}</p>
            <p><strong>Quantite:</strong> {demande.quantite}</p>
            <p><strong>Status:</strong> {demande.status}</p>
            <button
              onClick={() => navigate(`/update/${demande.id}`)}
              className="mt-2 p-2 bg-yellow-500 text-white rounded"
            >
              Modifier
            </button>
            <button
              onClick={() => handleDelete(demande.id)}
              className="mt-2 ml-4 p-2 bg-red-500 text-white rounded"
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
