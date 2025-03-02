<template>
  <div
    class="rounded-lg overflow-hidden shadow-lg relative aspect-[3/5] transition-transform duration-300"
    :class="interactive_classes"
    @click="onClick"
  >
    <div
      v-for="i in [0, 1, 2]"
      class="absolute top-0 w-full bg-[#BFAD9E] rounded-lg shadow shadow-stone-800/30"
      :style="{
        height: `${100 - i}%`,
      }"
    ></div>
    <div
      class="absolute top-0 w-full h-[97%] rounded-lg shadow shadow-stone-800/30 overflow-hidden"
    >
      <img
        :src="book.image"
        alt="Book"
        class="absolute w-full h-full rounded-lg shadow shadow-stone-800/30 object-cover bg-white"
      />
      <div
        class="absolute left-0 h-full bg-gradient-to-r from-white/50 to-transparent w-6 group-hover:w-12 transition-all duration-400"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Book } from "~/types/Book";

const { show } = useBookFlyout();

interface Props {
  book: Book;
  interactive?: boolean;
}

const props = defineProps<Props>();

const interactive_classes = computed(() => ({
  group: props.interactive,
  "hover:scale-105": props.interactive,
  "cursor-pointer": props.interactive,
}));

const onClick = () => {
  if (props.interactive) show(props.book.id);
};
</script>
