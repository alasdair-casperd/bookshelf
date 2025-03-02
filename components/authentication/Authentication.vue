<template>
  <EmailSignIn v-if="view === 'sign-in'" v-model="view" />
  <EmailSignUp v-if="view === 'sign-up'" v-model="view" />
</template>

<script setup lang="ts">
export type View = "sign-in" | "sign-up";
const view = ref<View | undefined>("sign-in");
</script>
