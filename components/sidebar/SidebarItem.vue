<template>
  <NuxtLink
    :to="path"
    class="flex flex-row items-center gap-3 px-3 py-2 -mx-3 rounded-xl cursor-pointer duration-100"
    :class="selection_styles"
  >
    <Icon :name="icon" class="w-4 h-4 inline-block" />
    {{ text }}
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
  icon: string;
  text: string;
  path?: string;
  selected?: boolean;
}

const props = defineProps<Props>();

const selection_styles = {
  "bg-accent/20 text-accent": props.selected,
  "hover:bg-slate-200": !props.selected,
};
</script>
