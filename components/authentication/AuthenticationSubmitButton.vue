<template>
  <button type="submit" class="mt-6 flex flex-col justify-center items-center">
    <span v-if="!loading">{{ text }}</span>
    <Icon
      v-else
      name="tabler:loader-2"
      class="animate-spin translate-y-[3px]"
    />
  </button>
</template>

<script setup lang="ts">
interface Props {
  text: string;
  loading: boolean;
}

defineProps<Props>();
</script>
