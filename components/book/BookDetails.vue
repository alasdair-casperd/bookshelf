<template>
  <div v-if="current_book" class="p-12">
    <div class="mb-12 flex flex-row justify-between items-start">
      <div>
        <h1 class="text-3xl">{{ current_book.title }}</h1>
        <div v-if="current_book" class="text-slate-600 text-xl">
          {{ current_book.authors?.join(", ") }}
        </div>
      </div>
      <CloseButton @click="hide" />
    </div>
    <div class="h-[400px] flex flex-row gap-8">
      <Book :book="current_book" class="h-full" />
      <div class="flex flex-col grow">
        <DataTable :data="data" class="bg-white" />
      </div>
    </div>
    <div class="my-12">{{ current_book.description }}</div>
  </div>
</template>

<script setup lang="ts">
import DataTable from "../utility/DataTable.vue";

const { current_book, hide } = useBookFlyout();

const data = [
  {
    label: "ISBN",
    value: current_book.value?.isbn ?? "",
  },
  {
    label: "Author",
    value: current_book.value?.authors?.join(", ") ?? "",
  },
  {
    label: "Published",
    value: current_book.value?.publishedDate ?? "",
  },
  {
    label: "Publisher",
    value: current_book.value?.publisher ?? "",
  },
  {
    label: "Page Count",
    value: current_book.value?.page_count?.toString() ?? "",
  },
];
</script>
