<template>
  <div
    class="min-w-[250px] h-full min-h-screen bg-slate-100 pt-12 pb-6 px-6 flex flex-col justify-between"
  >
    <div>
      <div class="text-2xl">Bookshelf</div>
      <div class="flex flex-col gap-1 mt-10">
        <SidebarItem
          :key="item.text + (selected_item === item ? '_selected' : '')"
          v-for="item in items"
          v-bind="item"
          :selected="item === selected_item"
        />
      </div>
    </div>
    <div class="mt-12">
      <SidebarItem icon="tabler:user" text="Account" />
      <SidebarItem
        @click="signOut"
        icon="tabler:square-rounded-arrow-right"
        text="Sign Out"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { signOut } = useAuthentication();
const router = useRoute();

const items = [
  { icon: "tabler:home", text: "Home", path: "/" },
  { icon: "tabler:books", text: "Library", path: "/library" },
  { icon: "tabler:eye", text: "Discover", path: "/discover" },
  { icon: "tabler:calendar-check", text: "Activity", path: "/activity" },
  { icon: "tabler:message", text: "Friends", path: "/friends" },
];

const selected_item = computed(() => {
  const item = items.slice(1).find((item) => router.path.startsWith(item.path));
  return item ?? items[0];
});
</script>
