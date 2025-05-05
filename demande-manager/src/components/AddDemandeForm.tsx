import React, { useState } from 'react';
import { Demande } from '../models/demande';
import { createDemande } from '../services/demandeService';

const AddDemandeForm: React.FC = () => {
  const [designation, setDesignation] = useState('');
  const [quantite, setQuantite] = useState(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newDemande: Partial<Demande> = {
      designation,
      quantite,
      status: 'PENDING',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    await createDemande(newDemande);
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">
      <div className="mb-2">
        <label className="block text-gray-700">Designation:</label>
        <input
          type="text"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block text-gray-700">Quantité:</label>
        <input
          type="number"
          value={quantite}
          onChange={(e) => setQuantite(Number(e.target.value))}
          className="border p-2 w-full"
          required
        />
      </div>
      <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
        Ajouter
      </button>
      
    </form>
  );
};

export default AddDemandeForm;
