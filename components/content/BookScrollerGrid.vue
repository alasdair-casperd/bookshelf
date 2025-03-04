<template>
  <div class="overflow-hidden flex flex-col items-center">
    <div class="flex flex-row gap-8 sm:gap-20 sm:px-20">
      <LoopingScroller
        v-for="i in [0, 1, 2]"
        :speed="0.025"
        :key="gap_size"
        :gap_size="gap_size"
        class="h-screen"
        :reversed="i % 2 === 0"
      >
        <Book
          v-for="book in book_subsets[i]"
          :book="book"
          class="w-[100px] sm:w-[200px]"
        />
      </LoopingScroller>
    </div>
  </div>
</template>

<script setup lang="ts">
import { default_books } from "~/data/default-books";

const book_subsets = [0, 1, 2].map((i) => {
  return default_books
    .filter((_book, index) => index % 3 === i)
    .slice(0, Math.floor(default_books.length / 3));
});

const { break_point } = useBreakpoint();

const gap_size = computed(() => (break_point.value === "sm" ? 24 : 48));
</script>
