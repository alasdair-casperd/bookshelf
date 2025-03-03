import type { Auth } from "firebase/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const auth = useNuxtApp().$auth as Auth;

  // Wait for the auth state to be resolved
  await new Promise<void>((resolve) => {
    auth.onAuthStateChanged(() => {
      resolve();
    });
  });

  // If no user is signed in, redirect to the sign-in page
  if (!auth.currentUser && !to.path.startsWith("/sign-in")) {
    return navigateTo("/sign-in");
  }

  // If a user is signed in, redirect the sign in page to the home page
  if (auth.currentUser && to.path.startsWith("/sign-in")) {
    return navigateTo("/");
  }
});
