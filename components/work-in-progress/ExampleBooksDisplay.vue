<template>
  <div class="w-full h-full">
    <div v-for="category in categories" class="p-12">
      <div class="text-3xl">{{ category }}</div>
      <div class="overflow-x-scroll flex flex-row -mx-12">
        <div class="flex flex-row gap-12 py-6 px-12">
          <Book
            v-for="book in books"
            interactive
            :book="book"
            class="h-[250px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { default_books } from "~/data/default-books";
import type { Book } from "~/types/Book";
const { get } = useBookCache();

const categories = [
  "Your Next Read",
  "Fiction",
  "Non-Fiction",
  "Fantasy",
  "Mystery",
];

const books = ref<Book[]>([]);
const fetchBooks = async () => {
  default_books.forEach(async (id) => {
    const book = await get(id);
    if (book) books.value.push(book);
  });
};

onMounted(fetchBooks);
</script>
