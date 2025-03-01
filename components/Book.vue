<template>
  <div
    class="rounded-lg overflow-hidden shadow-lg relative h-[300px] w-[180px] group hover:scale-105 transition-transform duration-300"
  >
    <div
      v-for="i in [0, 1, 2, 3, 4]"
      class="absolute top-0 w-full bg-[#BFAD9E] rounded-lg shadow shadow-stone-800/30"
      :style="{
        height: `${100 - i}%`,
      }"
    ></div>
    <div
      class="absolute top-0 w-full h-[95%] rounded-lg shadow shadow-stone-800/30 overflow-hidden"
    >
      <img
        :src="src"
        alt="Book"
        class="absolute w-full h-full rounded-lg shadow shadow-stone-800/30 object-cover"
      />
      <div
        class="absolute left-0 h-full bg-gradient-to-r from-white/50 to-transparent w-6 group-hover:w-12 transition-all duration-400"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  src: string;
}

defineProps<Props>();
</script>
