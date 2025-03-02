<template>
  <div class="flex flex-row gap-20 px-20">
    <LoopingScroller
      v-for="i in [0, 1, 2]"
      :speed="0.025"
      :gap_size="48"
      class="h-screen"
      :reversed="i % 2 === 0"
    >
      <Book v-for="book in book_subsets[i]" :book="book" class="w-[200px]" />
    </LoopingScroller>
  </div>
</template>

<script setup lang="ts">
import { default_books } from "~/data/default-books";
const { get } = useBookCache();
const book_subsets = [0, 1, 2].map((i) => {
  return default_books
    .filter((_book, index) => index % 3 === i)
    .slice(0, Math.floor(default_books.length / 3))
    .map((id) => get(id));
});
</script>
