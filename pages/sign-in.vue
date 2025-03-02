<template>
  <div class="grid grid-cols-2 min-h-screen w-full">
    <div class="bg-slate-200 flex flex-row justify-end">
      <BookScrollerGrid />
    </div>
    <div class="bg-slate-100 flex flex-col justify-center items-center">
      <div class="max-w-96 w-full">
        <Authentication />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "sign-in",
});
</script>
