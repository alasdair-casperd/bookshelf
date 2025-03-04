const current_modal_id = ref<string | undefined>(undefined);

export const useModal = (id: string) => {
  const visible = computed(() => current_modal_id.value === id);

  const show = async () => {
    current_modal_id.value = id;
  };

  const hide = () => {
    current_modal_id.value = undefined;
  };

  return { visible, show, hide };
};
