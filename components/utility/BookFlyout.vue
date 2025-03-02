<template>
  <Transition class="fade">
    <div
      v-if="visible"
      @click="hide"
      class="absolute h-full w-full bg-black/50"
    ></div>
  </Transition>
  <div
    v-if="visible"
    @click="hide"
    class="absolute h-full w-full bg-black/50"
  ></div>
  <Transition class="slide">
    <div
      v-if="visible"
      class="absolute right-0 w-full max-w-[800px] h-screen overflow-scroll bg-slate-100"
    >
      <slot />
    </div>
  </Transition>
</template>

<style>
.fade.v-enter-active,
.fade.v-leave-active {
  transition: opacity 0.2s ease;
}

.fade.v-enter-from,
.fade.v-leave-to {
  opacity: 0;
}

.slide.v-enter-active,
.slide.v-leave-active {
  transition: transform 0.2s ease;
}

.slide.v-enter-from,
.slide.v-leave-to {
  transform: translateX(100%);
}
</style>

<script setup lang="ts">
const visible = ref(false);
const { current_book, hide } = useBookFlyout();

watch(current_book, (value) => {
  visible.value = value !== undefined;
});
</script>
