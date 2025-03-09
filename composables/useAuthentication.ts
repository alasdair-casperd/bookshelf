import {
  signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword,
  createUserWithEmailAndPassword as firebaseCreateUserWithEmailAndPassword,
  type Auth,
} from "firebase/auth";
import { useFirestore } from "./useFirestore";

export const useAuthentication = () => {
  /**
   * Firebase auth instance.
   */
  const auth = useNuxtApp().$auth as Auth;

  /**
   * Sign in with an email and a password.
   */
  const signInWithEmailAndPassword = async (
    email: string,
    password: string
  ) => {
    try {
      await firebaseSignInWithEmailAndPassword(auth, email, password);
      return {};
    } catch (error) {
      return { error: "Incorrect email or password. Please try again." };
    }
  };

  /**
   * Register a new user.
   */
  const createUserWithEmailAndPassword = async (
    email: string,
    password: string,
    username: string
  ) => {
    try {
      // Create a new user in Firebase Authentication
      const user = await firebaseCreateUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Create the new user
      useUser().createUser(username, user.user);
      return {};
    } catch (error: any) {
      return { error: error.message ?? "" };
    }
  };

  /**
   * Sign out the current user and navigate to the sign in page.
   */
  const signOut = async () => {
    await auth.signOut();
    navigateTo("/sign-in");
  };

  return {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
  };
};
