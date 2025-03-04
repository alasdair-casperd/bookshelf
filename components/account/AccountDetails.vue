<template>
  <div>
    <DataTable :data="data" class="bg-white" :key="user?.username" />
  </div>
</template>

<script setup lang="ts">
const { user } = useUser();

const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return date.toLocaleDateString(undefined, options);
};

const data = computed(() => {
  return [
    { label: "Email", value: user.value?.email ?? "" },
    { label: "Username", value: user.value?.username ?? "" },
    {
      label: "Joined",
      value: user.value?.date_joined ? formatDate(user.value.date_joined) : "",
    },
  ];
});
</script>
