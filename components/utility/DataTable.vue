<template>
  <div class="rounded-lg px-4 grid divide-y divide-slate-200">
    <div v-for="item in data" class="flex flex-row gap-4 py-3">
      <div class="w-24 text-slate-500">
        {{ item.label }}
      </div>
      <div>
        {{ item.value }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  data: { label: string; value: string }[];
}
defineProps<Props>();
</script>
