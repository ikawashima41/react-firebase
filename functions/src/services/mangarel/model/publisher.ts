import { firestore } from "firebase/app";

export type Publisher = {
  id?: string;
  name: string;
  nameReading: string | null;
  website: string | null;
  createdAt: firestore.Timestamp | null;
  updateAt: firestore.Timestamp | null;
};
