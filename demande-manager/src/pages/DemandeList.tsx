import React, { useEffect, useState } from 'react';
import { fetchDemandes } from '../services/demandeService';
import { Demande } from '../models/demande';
import AddDemandeForm from '../components/AddDemandeForm';

const DemandeList: React.FC = () => {
  const [demandes, setDemandes] = useState<Demande[]>([]);

  useEffect(() => {
    fetchDemandes().then(setDemandes).catch(console.error);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Liste des Demandes</h2>

      <AddDemandeForm />
       
      <div className="space-y-2">
        {demandes.map((demande) => (
          <div key={demande.id} className="bg-white shadow p-4 rounded-md">
            <div className="font-semibold">{demande.designation}</div>
            <div>Quantité: {demande.quantite}</div>
            <div>Status: <span className="font-mono">{demande.status}</span></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DemandeList;
