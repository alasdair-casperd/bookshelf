import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  modules: ["@nuxt/icon", "@nuxt/fonts"],
  runtimeConfig: {
    public: {
      // Firebase
      firebaseApiKey: "",
      firebaseAuthDomain: "",
      firebaseProjectId: "",
      firebaseStorageBucket: "",
      firebaseMessagingSenderId: "",
      firebaseAppId: "",

      // Google Books
      googleBooksApiKey: "AIzaSyBUJ-vbicxwbRWH2GVAFOSY9sys-5YSTco", // Overridden by unrestricted key in development
    },
  },
  ssr: false,
});
