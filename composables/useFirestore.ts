import {
  Firestore,
  collection,
  doc,
  setDoc,
  getDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import type { Collection } from "~/types/Collection";
import type { Read } from "~/types/Read";
import type { User } from "~/types/User";

/**
 * A type representing a user as store in the database.
 */
type DatabaseUser = Omit<User, "reads" | "collections">;

/**
 * A type representing a collection as stored in the database.
 */
type DatabaseCollection = Collection & {
  user_id: string;
};

/**
 * A type representing a 'read' as stored in the database.
 */
type DatabaseRead = Read & {
  user_id: string;
};

/**
 * A composable used to read and write to the firestore database. Note that the only methods provided are for
 * uploading and getting users, with collections and reads being handled internally.
 * @returns
 */
export const useFirestore = () => {
  /**
   * Firebase auth instance.
   */
  const firestore = useNuxtApp().$firestore as Firestore;

  const user_table = collection(firestore, "users");
  const collection_table = collection(firestore, "collections");
  const read_table = collection(firestore, "reads");

  /**
   * Upsert a user to the database, storing the associated collections and reads.
   * @param user
   */
  const upsertUser = async (user: User) => {
    // Store user details
    const database_user: DatabaseUser = { ...user };
    await setDoc(doc(user_table, user.id), database_user);

    // Store the user's collections
    user.collections.forEach(async (collection) => {
      const database_collection: DatabaseCollection = {
        ...collection,
        user_id: user.id,
      };
      await setDoc(doc(collection_table, collection.id), database_collection);
    });

    // Store read details
    user.reads.forEach(async (read) => {
      const database_read: DatabaseRead = {
        ...read,
        user_id: user.id,
      };
      await setDoc(doc(read_table, read.id), database_read);
    });
  };

  /**
   * Get a user's collections from the database.
   */
  const getCollectionsForUser = async (
    user_id: string
  ): Promise<Collection[]> => {
    const q = query(collection_table, where("user_id", "==", user_id));
    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => {
      return { ...doc.data() } as Collection;
    });
  };

  /**
   * Get a user's reads from the database.
   */
  const getReadsForUser = async (user_id: string): Promise<Read[]> => {
    const q = query(read_table, where("user_id", "==", user_id));
    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => {
      return { ...doc.data() } as Read;
    });
  };

  /**
   * Retrieve a user from the database, including their associated reads and collections.
   */
  const getUser = async (id: string): Promise<User> => {
    // Retrieve the user's collections and reads
    const collections = await getCollectionsForUser(id);
    const reads = await getReadsForUser(id);

    // Retrieve the user
    const user_doc = await getDoc(doc(user_table, id));
    const data = user_doc.data();
    const auth_user = useAuthentication().auth.currentUser;

    return {
      id: user_doc.id,
      username: data?.username ?? "",
      email: auth_user?.email ?? "",
      date_joined: data?.date_joined.toDate() ?? new Date(),
      reads: reads,
      collections: collections,
    };
  };

  return {
    upsertUser,
    getUser,
  };
};
