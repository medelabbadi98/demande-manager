export interface Demande {
    id: string;
    designation: string;
    quantite: number;
    status: 'PENDING' | 'ACCEPTED' | 'REJECTED';
    createdAt: string;
    updatedAt: string;
  }
  