<template>
  <div class="p-12 flex flex-row gap-12 overflow-scroll">
    <Book
      v-for="book in default_books"
      interactive
      :src="book"
      class="w-4 h-6"
    />
  </div>

  <div @click="signOut" class="p-12">Sign Out</div>
</template>

<script setup lang="ts">
import { default_books } from "~/data/default-books";
const { signOut } = useAuthentication();
</script>
