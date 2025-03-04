<template>
  <AccountDetails />
  <div class="button button-secondary mt-8" @click="signOut">Sign Out</div>
</template>

<script setup lang="ts">
const { signOut } = useAuthentication();
</script>
