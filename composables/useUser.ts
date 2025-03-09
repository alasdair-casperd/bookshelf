import type { User as AuthUser, UserCredential } from "firebase/auth";
import type { User } from "~/types/User";
import { default_collections } from "~/data/default-collections";

const user = useState<User | undefined>("current-user");
const { auth } = useAuthentication();

/**
 * Watch for auth state changes and update the user accordingly.
 */
auth.onAuthStateChanged(async (auth_user) => {
  if (auth_user) user.value = await useFirestore().getUser(auth_user.uid);
  else user.value = undefined;
  console.log("Auth state changed, updating user details.");
});

/**
 * Watch for changes to the user and update the database accordingly.
 */
watch(
  user,
  async (user) => {
    if (user) {
      console.log("User changed, updating user details in firestore.");
      await useFirestore().upsertUser(user);
    }
  },
  { deep: true }
);

export const useUser = () => {
  /**
   * Create a new user of the application which will be stored to firestore.
   * @param username
   * @param auth_user
   */
  const createUser = async (username: string, auth_user: AuthUser) => {
    const new_user: User = {
      id: auth_user.uid,
      username,
      email: auth_user.email ?? "",
      date_joined: new Date(),
      reads: [],
      collections: default_collections,
    };
    user.value = new_user;
  };

  return { user, createUser };
};
