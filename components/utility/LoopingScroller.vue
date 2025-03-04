<template>
  <div class="overflow-hidden">
    <div
      class="flex flex-col"
      :style="{
        gap: `${props.gap_size}px`,
      }"
      ref="scroller"
    >
      <slot />
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface props {
  reversed?: boolean;
  speed: number;
  gap_size: number;
}

const props = defineProps<props>();

const scroller = ref<HTMLElement>();

let start_time: number | undefined = undefined;
let item_count: number | undefined = undefined;
let item_size = 0;
let reset_distance = 10;

/**
 * Animate the infinite looping scroll
 */
const animate = (t: number) => {
  if (!scroller.value) return;

  // Determine the number and size of the children of the scroller
  // (it is assumed all children have the same height)
  if (!item_count) {
    item_count = scroller.value.children.length / 2;
    item_size = scroller.value.children[0].clientHeight;
    reset_distance = item_count * (item_size + props.gap_size);
  }
  if (item_count === 0) return;

  // Correct for the start time
  if (!start_time) start_time = t;
  t = t - start_time;

  // Reset the scroller if it has scrolled completed a full loop
  if (t * props.speed > reset_distance) {
    start_time += reset_distance / props.speed;
  }

  // Position the scroller
  scroller.value.style.transform = `translateY(${props.reversed ? "" : "-"}${
    t * props.speed - (props.reversed ? reset_distance : 0)
  }px)`;

  // Trigger the next frame
  requestAnimationFrame(animate);
};

// Initialize the animation
onMounted(() => {
  requestAnimationFrame(animate);
});
</script>
