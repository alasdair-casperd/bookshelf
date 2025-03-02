<template>
  <div v-if="current_book" class="p-12">
    <div class="mb-12 flex flex-row justify-between items-start">
      <div>
        <h1 class="text-3xl">{{ current_book.title }}</h1>
        <div v-if="current_book" class="text-slate-600 text-xl">
          {{ current_book.authors?.join(", ") }}
        </div>
      </div>
      <div
        @click="hide"
        class="bg-slate-200 text-slate-500 text-xl rounded-full flex items-center justify-center h-10 w-10 cursor-pointer"
      >
        <Icon name="tabler:x"></Icon>
      </div>
    </div>
    <div class="h-[400px] flex flex-row gap-8">
      <Book :book="current_book" class="h-full" />
      <div class="flex flex-col grow">
        <div class="bg-white rounded-lg px-4 grid divide-y divide-slate-200">
          <div v-for="item in data" class="flex flex-row gap-4 py-3">
            <div class="w-24 text-slate-500">
              {{ item.label }}
            </div>
            <div>
              {{ item.value }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="my-12">{{ current_book.description }}</div>
  </div>
</template>

<script setup lang="ts">
const { current_book, hide } = useBookFlyout();

const data = [
  {
    label: "ISBN",
    value: current_book.value?.isbn,
  },
  {
    label: "Author",
    value: current_book.value?.authors?.join(", "),
  },
  {
    label: "Published",
    value: current_book.value?.publishedDate,
  },
  {
    label: "Publisher",
    value: current_book.value?.publisher,
  },
  {
    label: "Page Count",
    value: current_book.value?.page_count,
  },
];
</script>
