import axios from 'axios';
import { Demande } from '../models/demande';

const API_URL = 'http://localhost:4849/api/v1/demandes'; // change later if needed

export const fetchDemandes = async (): Promise<Demande[]> => {
  const res = await axios.get<Demande[]>(API_URL);
  return res.data;
};


export const createDemande = async (demande: Partial<Demande>): Promise<Demande> => {
  const res = await axios.post<Demande>(API_URL+'/demande', demande);
  return res.data;
};

export const updateDemande = (demandeId: string, demande: any) => {
  return axios.put(`${API_URL}/${demandeId}`, demande);
};