<template>
  <Transition class="fade">
    <div
      v-if="visible"
      @click="hide"
      class="absolute h-full w-full bg-black/50"
    ></div>
  </Transition>
  <Transition class="slide">
    <div
      v-if="visible"
      class="absolute w-full h-screen overflow-scroll flex items-center justify-center pointer-events-none"
    >
      <div
        class="bg-slate-100 min-w-[400px] p-8 rounded-2xl pointer-events-auto"
      >
        <div class="flex flex-row items-center justify-between mb-4">
          <div class="text-2xl">
            {{ title }}
          </div>
          <CloseButton @click="hide" />
        </div>
        <slot />
      </div>
    </div>
  </Transition>
</template>

<style scoped>
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
  transform: translateY(-100%);
}
</style>

<script setup lang="ts">
interface Props {
  id: string;
  title: string;
}

const props = defineProps<Props>();

const { visible, hide } = useModal(props.id);
</script>
