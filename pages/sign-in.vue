<template>
  <div class="flex flex-col lg:grid lg:grid-cols-2 min-h-screen w-full">
    <div
      class="bg-slate-300 lg:bg-slate-200 flex flex-row justify-center lg:justify-end max-w-screen overflow-hidden max-h-[200px] sm:max-h-[300px] lg:max-h-none"
    >
      <BookScrollerGrid />
    </div>
    <div
      class="bg-slate-100 flex flex-col justify-center items-center h-full p-4 py-12 grow"
    >
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
