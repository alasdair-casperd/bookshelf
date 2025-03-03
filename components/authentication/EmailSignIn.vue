<template>
  <div class="mb-12">
    <h1 class="text-3xl text-center font-bold mb-2">Sign In to Your Account</h1>
    <div v-if="error_message" class="text-red-500 text-sm text-center">
      {{ error_message }}
    </div>
  </div>
  <form @submit.prevent="onSubmit" class="flex flex-col gap-4">
    <div>
      <label for="email">Email </label>
      <input
        v-model="email"
        type="email"
        id="email"
        placeholder="Your email..."
        required
      />
    </div>
    <div>
      <label for="password">Password</label>
      <input
        v-model="password"
        type="password"
        id="password"
        placeholder="Your password..."
        required
      />
    </div>
    <AuthenticationSubmitButton
      :loading="loading"
      text="Sign In"
    ></AuthenticationSubmitButton>
    <div class="text-center mt-4 text-accent">
      Need an account?
      <span @click="view = 'sign-up'" class="font-bold cursor-pointer"
        >Sign Up</span
      >
    </div>
  </form>
</template>

<script setup lang="ts">
import type { View } from "./Authentication.vue";
const { signInWithEmailAndPassword } = useAuthentication();

// Props
const view = defineModel<View>();

// Refs
const email = ref("");
const password = ref("");
const error_message = ref<string | undefined>();
const loading = ref(false);

// Methods
const onSubmit = async () => {
  loading.value = true;
  const result = await signInWithEmailAndPassword(email.value, password.value);
  if (result.error) error_message.value = result.error;
  else navigateTo("/");
  loading.value = false;
};
</script>
