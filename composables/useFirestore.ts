import type { User as FirebaseUser } from "firebase/auth";
import { Firestore, collection, doc, setDoc } from "firebase/firestore";
import type { User } from "~/types/User";

export const useFirestore = () => {
  /**
   * Firebase auth instance.
   */
  const firestore = useNuxtApp().$firestore as Firestore;

  const user_collection = collection(firestore, "users");

  const createUser = (username: string, firebase_user: FirebaseUser) => {
    const user: User = {
      id: firebase_user.uid,
      username,
      email: firebase_user.email ?? "",
      date_joined: new Date(),
    };
    upsertUser(user);
  };

  const upsertUser = (user: User) => {
    setDoc(doc(user_collection, user.id), user);
  };

  return {
    createUser,
    upsertUser,
  };
};
