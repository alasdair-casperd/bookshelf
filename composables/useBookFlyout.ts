const current_book = ref<string | undefined>(undefined);

export const useBookFlyout = () => {
  const show = (book_id: string) => {
    current_book.value = book_id;
  };

  const hide = () => {
    current_book.value = undefined;
  };

  return { current_book, show, hide };
};
