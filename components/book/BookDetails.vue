<template>
  <div class="p-12">
    <div class="mb-12 flex flex-row justify-between items-start">
      <div>
        <h1 class="text-3xl">Small Things Like These</h1>
        <div class="text-slate-600 text-xl">Claire Keegan</div>
      </div>
      <div
        @click="hide"
        class="bg-slate-200 text-slate-500 text-xl rounded-full flex items-center justify-center h-10 w-10 cursor-pointer"
      >
        <Icon name="tabler:x"></Icon>
      </div>
    </div>
    <div class="h-[400px] flex flex-row gap-8">
      <Book :src="default_books[1]" class="h-full" />
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
    <div class="my-12">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A, officiis?
      Nobis non nesciunt corrupti molestiae quaerat eos dignissimos, facilis
      magnam perferendis blanditiis dolores magni quis tempora sapiente incidunt
      placeat doloremque. Lorem ipsum dolor sit amet consectetur adipisicing
      elit. A, officiis? Nobis non nesciunt corrupti molestiae quaerat eos
      dignissimos, facilis magnam perferendis blanditiis dolores magni quis
      tempora sapiente incidunt placeat doloremque. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. A, officiis? Nobis non nesciunt corrupti
      molestiae quaerat eos dignissimos, facilis magnam perferendis blanditiis
      dolores magni quis tempora sapiente incidunt placeat doloremque. Lorem
      ipsum dolor sit amet consectetur adipisicing elit. A, officiis? Nobis non
      nesciunt corrupti molestiae quaerat eos dignissimos, facilis magnam
      perferendis blanditiis dolores magni quis tempora sapiente incidunt
      placeat doloremque.
    </div>
  </div>
</template>

<script setup lang="ts">
import { default_books } from "~/data/default-books";
const { hide } = useBookFlyout();

const data = [
  {
    label: "ISBN",
    value: "9780735243361, 0735243360",
  },
  {
    label: "Author",
    value: "Claire Keegan",
  },
  {
    label: "Published",
    value: "25 August 2022",
  },
  {
    label: "Publisher",
    value: "Penguin Books",
  },
  {
    label: "Page Count",
    value: "540",
  },
  {
    label: "Language",
    value: "English",
  },
];
</script>
