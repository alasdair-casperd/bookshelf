import type { User } from "~/types/User";

const user = useState<User | undefined>("current-user");

export const useUser = () => {
  const { auth } = useAuthentication();

  auth.onAuthStateChanged(async (auth_user) => {
    if (auth_user) user.value = await useFirestore().getUser(auth_user.uid);
    else user.value = undefined;
  });

  return { user };
};
