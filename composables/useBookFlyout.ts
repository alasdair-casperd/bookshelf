import type { Book } from "~/types/Book";

const current_book = ref<Book | undefined>(undefined);

export const useBookFlyout = () => {
  const show = async (book_id: string) => {
    current_book.value = await useBookCache().get(book_id);
  };

  const hide = () => {
    current_book.value = undefined;
  };

  return { current_book, show, hide };
};
